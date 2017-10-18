<template>
<div>
  <!-- header -->
  <header class="row container-fluid">
    <div class="row container">
      <div class="col-sm-12">header</div>
    </div>
  </header>
  <!-- /header -->
  <!-- main -->
  <main class="row container-fluid">
  <div class="row container">
    <section role="directory" class="col-sm-3">
      <!-- begin vcnavSide101 -->
      <nav class="vcnavSide101" role="navigation">
        <h2 class="vcnavSide101_heading">Categories</h2>
        <ul>
          <li>
            <a @click="toggleAuthTypeCheckbox(true); filterCategory('All')">
              All Items: {{ apiTotalCount }}
            </a>
          </li>
          <li v-for="(i, index) in categoryTypes">
            <p @click="filterCategory(i.catName)">{{ i.catName }} {{ i.catLength }}</p>
          </li>
        </ul>
      </nav>
      <!-- end vcnavSide101 -->
    </section>
    <section class="col-sm-9 apilist_display">
      <!-- auth filter, top pager controls -->
      <div class="row">
        <div class="col-sm-3">
          <!-- auth filter -->
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
              <label for="checkbox">HTTPS only</label>
            </li>
          </ul>
          <!-- /auth filter -->
        </div>
        <div class="col-sm-9">
          <!-- search -->
          <div>
            <vcSearch
            :pr-current-category="currentCategory"
            @search="search()" />
          </div>
          <!-- /search -->
          <!-- top pager controls -->
          <div>
            <span v-if="pagerButtons">
              <button class="btn btn1-01" @click="prevPage()">&lt;prevpage</button>
              <div class="custom-select pg_totalpages">
                <select v-model="currentPage">
                  <option v-for="i in totalPages" :value="i"
                  @click="showPage(i)" >{{ i }}</option>
                </select>
              </div>
              of {{ totalPages }}
              <button class="btn btn1-01" @click="nextPage()">nextPage&gt;</button>
              Items per page:
              <div class="custom-select pg_itemsperpage">
                <select v-model="perPage">
                  <option v-for="i in perPageItems" :value="i"
                  @click="activatePager(apiListFiltered)" >{{ i }}</option>
                </select>
              </div>
            </span>
          </div>
          <!-- /top pager controls -->
        </div>
      </div>
      <!-- /auth filter, top pager controls -->
      <!-- apilist -->
      <section class="row apilist">
        <div class="col-sm-12">
          <!-- main listing -->
          <p v-if="currentCategory==='All'">Showing All Items</p>
          <p v-else>currentCategory: {{ currentCategory }}</p>
          <button class="btn btn1-01"
          @click="toggleAuthTypeCheckbox(true); filterCategory('All')">Show All</button>
          <div class="row">
            <!-- sorter -->
            <div class="col-xs-12 col-sm-7">
              API
              <button @click="sort_table('API')">
                {{ sortAsc ? 'sortAsc' : 'sortDesc' }}
              </button>
            </div>
            <div class="col-xs-12 col-sm-2">
              Category
              <button @click="sort_table('Category')">
                {{ sortAsc ? 'sortAsc' : 'sortDesc' }}
              </button>
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
      </section>
      <!-- /apilist -->
    </section>
  </div>
  </main>
  <!-- /main -->
  <!-- footer -->
  <footer class="row container-fluid">
    <div class="row container">
      <div class="col-sm-12">footer</div>
    </div>
  </footer>
  <!-- /footer -->
</div>
</template>
<script>
import axios from "axios";
import {arr_filter} from "../js/arr_filter.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_sortValue} from "../js/arr_sortValue.js";
import {search_fuse} from "../js/search_fuse.js";
import Paginate from "../js/vendor/Paginate.js";
import {store} from "../js/store.js";

const vcApiList = () => import ('./vcApiList.vue');
const vcSearch = () => import ('./vcSearch.vue');
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

      };
    },
    components: {
      vcApiList: vcApiList,
      vcSearch: vcSearch
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
      prevPage: function() {
        if (this.pager.currentPage === 1) {
          this.apiList = this.pager.page(this.pager.totalPages);
        } else {
          this.apiList = this.pager.prev();
        }
        this.currentPage = this.pager.currentPage;
      },
      nextPage: function() {
        if (!this.pager.hasNext()) {
          this.apiList = this.pager.page(0);
        } else {
          this.apiList = this.pager.next();
        }
        this.currentPage = this.pager.currentPage;
      },
      addFiltersList: function (arr) {
        // for authTypes
        this.authTypes = arr_extractUnique(arr, "Auth");
        this.toggleAuthTypeCheckbox(true);

        // for categoryTypes
        let temp = arr_extractUnique(arr, "Category");
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
      search: function() {
        let res = search_fuse({
          data: this.apiListFiltered,
          value: store.fc.searchKeyword,
          searchKeys: ["API","Link"]
        });

        if (res.length === 0) {
          console.log("no search results");
        } else {
          this.activatePager(res);
          res = null;
          store.fc.searchKeyword = null;      
        }        
      },
      sort_table: function(sortBy) {
        this.sortAsc = !this.sortAsc;
        let sorted = arr_sortValue(sortBy, this.apiListFiltered);

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