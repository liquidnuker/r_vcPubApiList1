<template>
<div>
  <span v-if="apiStatus">
    Status:
    <a href="https://travis-ci.org/toddmotto/public-apis">
      <img src="https://travis-ci.org/toddmotto/public-apis.svg?branch=master" />
    </a>
  </span>
  <div class="row">
    <div class="col-sm-3">
      {{ apiTotalCount }} <br>
      <!-- page controls -->
      <div>
        <span v-if="pagerButtons">
          <button @click="prevPage()">&lt;prevpage</button>
          <div class="custom-select pg_totalpages">
            Page&nbsp;
            <select v-model="currentPage">
              <option @click="showPage(i)" v-for="i in totalPages" :value="i">{{ i }}</option>
            </select>
          </div>
          of {{ totalPages }}
          <button @click="nextPage()">nextPage&gt;</button>
        </span>
        <button class="btn btn1-01"
        @click="filterCategory('All')">Show All</button>
      </div>
      <!-- /page controls -->
    </div>
    <div class="col-sm-9">
      <!-- authType filter -->
      <ul>
        <li v-for="i in authTypes">
          <input type="checkbox" :id="i"
         v-model="authTypeSelected" :value="i" />
        <label v-bind:for="i" class="">{{ i }}</label>
        </li>
      </ul>
      <p>Selected: {{ authTypeSelected }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <!-- category filter -->
      <ul>
        <li v-for="i in categoryTypes">
          <p @click="filterCategory(i.catName)">{{ i.catName }} {{ i.catLength }}</p>
        </li>
      </ul>
      <br>
      <br>
    </div>
    <div class="col-sm-9">
      <!-- main listing -->
      currentCategory: {{ currentCategory }}
      <vcApiList
      :pr-api-list="apiList" />
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import Paginate from "../js/vendor/Paginate.js";

const vcApiList = () => import ('./vcApiList.vue');
export default {
  data() {
      return {
        API_URL: "https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json",
        BACKUP_URL: "./entries_offline.json",

        apiListCache: "", // default unfiltered items
        apiTotalCount: "",
        apiListFiltered: "", // filtered items
        apiList: "", // displayed/paginated items

        categoryTypes: [],
        currentCategory: "All",
        authTypes: "",
        authTypeSelected: [], // checkbox

        // paginator 
        pager: null,
        currentPage: "",
        totalPages: "",
        pagerButtons: true,
        perPage: 20,

        apiStatus: false
      };
    },
    watch: {
      authTypeSelected: function () {
        this.filterAuthType();
      }
    },
    components: {
      vcApiList: vcApiList
    },
    mounted: function () {
      // this.getApiData(this.API_URL);
      this.getApiData(this.BACKUP_URL);
    },
    methods: {
      getApiData: function (url) {
        axios.get(url)
          .then((response) => {
            this.apiTotalCount = response.data.count;
            this.apiListCache = response.data.entries;
            this.apiListFiltered = this.apiListCache;
            this.activatePager();
          })
          .then(() => {
            this.addFiltersList(this.apiListCache);
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);

              // todo: add retry counter
              this.getApiData(this.BACKUP_URL);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js

              // todo: add retry counter
              this.getApiData(this.BACKUP_URL);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      },
      activatePager: function () {
        this.pager = null;
        this.pager = new Paginate(this.apiListFiltered, this.perPage);
        this.apiList = this.pager.page(0);
        this.currentPage = this.pager.currentPage;
        this.totalPages = this.pager.totalPages;
        this.pagerButtons = true;
      },
      showPage: function (num) {
        this.apiList = this.pager.page(num);
      },
      nextPage: function () {
        if (!this.pager.hasNext()) {
          this.apiList = this.pager.page(0);
        } else {
          this.apiList = this.pager.page(this.pager.currentPage + 1);
        }
        this.currentPage = this.pager.currentPage;
      },
      prevPage: function () {
        if (this.pager.currentPage === 1) {
          this.apiList = this.pager.page(this.pager.totalPages);
        } else {
          this.apiList = this.pager.page(this.pager.currentPage - 1);
        }
        this.currentPage = this.pager.currentPage;
      },
      filter: function (arr, prop, item) {
        // ret array
        let filtered = arr.filter(function (el) {
          return el[prop] === item;
        });
        return filtered;
      },
      extractUnique: function (arr, cat) {
        let o = {};
        let temp = [];
        for (let i = 0, l = arr.length; i < l; i++) {
          if (!o[arr[i][cat]]) {
            o[arr[i][cat]] = true;
            temp.push(arr[i][cat]);
            // temp.push(arr[i].Category);
          }
        }
        return temp;
      },
      addFiltersList: function (arr) {
        // for authTypes
        this.authTypes = this.extractUnique(arr, "Auth");
        // this.authTypes[0] = "null";
        this.toggleAuthTypeCheckbox(true);

        // for categoryTypes
        let temp = this.extractUnique(arr, "Category");
        // filter to get length of each item then push
        temp.map((i) => {
          let l = this.filter(this.apiListCache, "Category", i);
          this.categoryTypes.push({
            catName: i,
            catLength: l.length
          });
        });
        temp = null;
      },
      toggleAuthTypeCheckbox: function(checked) {
        if (checked) {
          this.authTypeSelected = [];
          for (let i in this.authTypes) {
            this.authTypeSelected.push(this.authTypes[i]);
          }
        } else {
          this.authTypeSelected = [];
        }
      },
      filterCategory: function (categoryType) {
        this.currentCategory = categoryType;
        this.filterAuthType();
      },
      filterAuthType: function () {
        let categoryTemp;

        if (this.currentCategory !== "All") {
          categoryTemp = this.filter(this.apiListCache, "Category", this.currentCategory);
        } else {
          // to filter authTypes from default items
          categoryTemp = this.apiListCache;
        }

        let authTemp = [];
        this.authTypeSelected.map((i) => {
          // get items of each authTypeSelected
          let t2 = this.filter(categoryTemp, "Auth", i);
          authTemp = authTemp.concat(t2);
          t2 = null;
        });

        if (authTemp.length === 0) {
          console.log("no results");
        }

        this.apiListFiltered = authTemp;
        categoryTemp = null;
        authTemp = null;
        this.activatePager();
      },
    }
};
</script>