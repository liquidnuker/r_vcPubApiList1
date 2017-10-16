<template>
<div>
  <span v-if="status.api">
    Status:
    <a href="https://travis-ci.org/toddmotto/public-apis">
      <img src="https://travis-ci.org/toddmotto/public-apis.svg?branch=master" />
    </a>
  </span>
  <div class="row">
    <div class="col-sm-3">
      ---------
    </div>
    <div class="col-sm-9">
      <!-- authType filter -->
      <ul>
        <li>
          Auth:
        </li>
        <li v-for="i in authTypes">
          <input type="checkbox" :id="i"
          v-model="authTypeSelected" :value="i" @change="filterAuthType()" />
          <label v-if="i === null" v-bind:for="i" class="">None</label>
          <label v-else v-bind:for="i" class="">{{ i }}</label>
        </li>
        <li role="separator" aria-expanded="true" aria-orientation="vertical">
        -----------
        </li>
        <li>
          <input type="checkbox" id="checkbox" v-model="https"
          @change="filterAuthType()" />
          <label for="checkbox">HTTPS</label>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-3">
      <!-- category filter -->
      <ul>
        <li>
          <p @click="toggleAuthTypeCheckbox(true); filterCategory('All')">
            All Items: {{ apiTotalCount }}
          </p>
        </li>
        <li v-for="i in categoryTypes">
          <p @click="filterCategory(i.catName)">{{ i.catName }} {{ i.catLength }}</p>
        </li>
      </ul>
      <br>
      <br>
    </div>
    <div class="col-sm-9">
      <!-- search -->
      <label for="api_search">Search {{ currentCategory }}:</label> 
      <input type="text" 
      name="api_search" 
      id="api_search" 
      placeholder="Enter keyword/s..." 
      @keyup.enter= "search($event.target.value)"  />
      <!-- page controls -->
      <div>
        <span v-if="pagerButtons">
          <button @click="prevPage()">&lt;prevpage</button>
          <div class="custom-select pg_totalpages">
            Page&nbsp;
            <!-- page jump -->
            <select v-model="currentPage">
              <option @click="showPage(i)" v-for="i in totalPages" :value="i">{{ i }}</option>
            </select>

            <!-- perPage -->
            Items per page:
            <select v-model="perPage">
              <option @click="activatePager(apiListFiltered)" 
              v-for="i in perPageItems" :value="i">{{ i }}</option>
            </select>

          </div>
          of {{ totalPages }}
          <button @click="nextPage()">nextPage&gt;</button>
        </span>
        <button class="btn btn1-01"
        @click="toggleAuthTypeCheckbox(true); filterCategory('All')">Show All</button>
      </div>
      <!-- /page controls -->
      <br>
      <!-- main listing -->
      <p v-if="currentCategory==='All'">Showing All Items</p>
      <p v-else>currentCategory: {{ currentCategory }}</p>
      <div class="row">
        <!-- sorter -->
        <div class="col-xs-12 col-sm-7">
          API
          <button @click="sortAPI()">{{ sortAsc ? 'sortAsc' : 'sortDesc' }} </button>
        </div>
        <div class="col-xs-12 col-sm-2">
          Category
        </div>
        <div class="col-xs-12 col-sm-2">
          Auth
        </div>
        <div class="col-xs-12 col-sm-1">
          HTTPS
        </div>
        <!-- /sorter -->
      </div>
      <vcApiList
      :pr-api-list="apiList" />
      <!-- /main listing -->
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import Paginate from "../js/vendor/Paginate.js";
import Fuse from "../js/vendor/fuse.min.js";
import {arr_filter} from "../js/arr_filter.js";

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
        https: "",


        // paginator 
        pager: null,
        currentPage: "",
        totalPages: "",
        pagerButtons: true,
        perPage: 20,
        perPageItems: [10, 20, 40, 60, 100],

        sortAsc: true,

        // messages
        status: {
          api: false
        },

        inputSearchTimeOut: null,
      };
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
            this.activatePager(this.apiListCache);
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
      activatePager: function (data) {
        this.pager = null;
        this.pager = new Paginate(data, this.perPage);
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
        this.toggleAuthTypeCheckbox(true);

        // for categoryTypes
        let temp = this.extractUnique(arr, "Category");
        // filter to get length of each item then push
        temp.map((i) => {
          let l = arr_filter(this.apiListCache, "Category", i);
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
        // uncheck https checkbox when showing all items
        this.https = false;
      },
      filterCategory: function (categoryType) {
        this.currentCategory = categoryType;
        this.filterAuthType();
      },
      filterAuthType: function () {
        let categoryTemp;

        if (this.currentCategory !== "All") {
          categoryTemp = arr_filter(this.apiListCache, "Category", this.currentCategory);
        } else {
          // to filter authTypes from default items
          categoryTemp = this.apiListCache;
        }

        // authType checkbox
        let authTemp = [];
        this.authTypeSelected.map((i) => {
          // get items of each authTypeSelected
          let t2 = arr_filter(categoryTemp, "Auth", i);
          authTemp = authTemp.concat(t2);
          t2 = null;
        });

        // HTTPS checkbox
        if (this.https) {
          let hTemp = arr_filter(authTemp, "HTTPS", this.https);
          this.apiListFiltered = hTemp;
          hTemp = null;
        } else {
          this.apiListFiltered = authTemp;
        }

        if (authTemp.length === 0) {
          console.log("no results");
        }
        
        authTemp = null;
        categoryTemp = null;  
        this.activatePager(this.apiListFiltered);
      },
      search: function(value) {
        let fuseOptions = {
          shouldSort: true,
          threshold: 0.6,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
          "API",
          "Link"
          ]
        };

        let fuse = new Fuse(this.apiListFiltered, fuseOptions);
        let temp = fuse.search(value);

        if (temp.length === 0) {
          console.log("no search results");
        } else {
          this.activatePager(temp);
          temp = null;      
        }        
      },
      sortItem: function(item, data) {
        // ret array
        this.item = item;

        data.sort((a, b) => {
          let itemToSort = this.item;
          let tempA = a[itemToSort].toUpperCase(); 
          let tempB = b[itemToSort].toUpperCase(); 
          if (tempA < tempB) {
            return -1;
          }
          if (tempA > tempB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        return data;
                
      },
      sortAPI: function() {
        this.sortAsc = !this.sortAsc;
        let sorted = this.sortItem("API", this.apiListFiltered);

        if (!this.sortAsc) {
          // sort asc
          this.apiListFiltered = sorted;
        } else {
          this.apiListFiltered = sorted.reverse();
        }
        this.sorted = null;
        this.activatePager(this.apiListFiltered);
      }      
    }
};
</script>