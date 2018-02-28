<template>
<div>
  <vue-progress-bar></vue-progress-bar>
  <!-- category list + api listing -->
  <div class="row container-fluid main_apilist_holder">
    <div class="row container apilist">
      <section role="directory" class="col-sm-3">
        <h2>Categories</h2>
        <!-- begin apilist_categories -->
        <nav class="apilist_categories" role="navigation">
          <ul>
            <li tabindex="0" @click="toggleAuthTypeCheckbox(true); filterCategory('All')">
              <a>
                All Items:
              </a>
              <span class="apilist_categories_count">{{ apiTotalCount }}</span>
            </li>
            <li tabindex="0" v-for="(i, index) in categoryTypes"
              :aria-setsize="categoryTypes.length" :aria-posinset="index + 1"
              @click="filterCategory(i.catName)"
              @keyup.enter="filterCategory(i.catName)">
              <a>{{ i.catName }}
              </a>
              <span class="apilist_categories_count">{{ i.catLength }}</span>
            </li>
          </ul>
        </nav>
        <!-- end apilist_categories -->
      </section>
      <div class="col-sm-9 apilist_display">
        <!-- auth filter, top pager controls -->
        <div class="row authsearch">
          <div class="col-sm-3">
            <section class="authtype_filter">
              <h2>Auth:</h2>
              <!-- auth filter -->
              <ul>
                <li v-for="i in authTypes">
                  <input type="checkbox" :id="i"
                  v-model="authTypeSelected" :value="i" @change="filterAuthType()" />
                  <label tabindex="0" v-if="i === null" v-bind:for="i" class="">None</label>
                  <label tabindex="0" v-else v-bind:for="i" class="">{{ i }}</label>
                </li>
                <hr role="separator" aria-expanded="true" aria-orientation="vertical">
                <li>
                  <input type="checkbox" id="checkbox" v-model="https"
                  @change="filterAuthType()" />
                  <label tabindex="0" for="checkbox">HTTPS only</label>
                </li>
              </ul>
              <!-- /auth filter -->
            </section>
          </div>
          <div class="col-sm-9">
            <div class="apilist_search_holder">
              <!-- search -->
              <vcSearch
              :pr-current-category="currentCategory"
              @search="search()" />
              <!-- /search -->
              <br>
              <button class="btn btn1-01"
              @click="toggleAuthTypeCheckbox(true); filterCategory('All')"
              data-message="Show All Items">Show All</button>
              
            </div>
          </div>
        </div>
        <!-- /auth filter, top pager controls -->
        <!-- status -->
        <div class="row api_status_holder">
          <div class="col-sm-3 api_status" id="api_status"
            aria-atomic="true" aria-relevant="additions text" aria-live="assertive">
            <p v-if="currentCategory==='All'">Showing All Items</p>
            <p v-else>currentCategory: {{ currentCategory }}</p>
            <p role="alert">{{ status.search }}</p>
          </div>
          <div class="col-sm-9 pg_container">
            <!-- top pager controls -->
            <span class="pg_holder" v-if="pagerButtons">
              <button class="btn btn1-01 btn_prev" @click="prevPage()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
              Prev
              </button>
              <p>Page</p>
              <select @change="showPage($event.target.value)" class="pg_select" v-model="currentPage">
                <option v-for="i in totalPages" :value="i"
                @click="showPage(i)" >{{ i }}</option>
              </select>
              <p>of {{ totalPages }}</p>
              <button class="btn btn1-01 btn_next" @click="nextPage()">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
              </button>
              <p>Items per page:</p>
              <select class="pg_perpage" v-model="perPage" 
              @change="activatePager(apiListFiltered)">
                <option v-for="i in perPageItems" :value="i"
                @click="activatePager(apiListFiltered)" >{{ i }}</option>
              </select>
            </span>
            <!-- /top pager controls -->
          </div>
        </div>
        <!-- /status -->
        <!-- sorter -->
        <div class="row apilist_sorter">
          <div class="col-xs-12 col-sm-7">
            <button class="btn btn1-01 btn_sort" @click="sort_table('API')" data-message="Sort Ascending or Descending">
            API
            <!-- sort icon -->
            <span v-if="sortAsc">
              <!-- up -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </span>
            <span v-else>
              <!-- down -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              </svg>
            </span>
            <!-- /sort icon -->
            </button>
          </div>
          <div class="col-xs-12 col-sm-2">
            <button class="btn btn1-01 btn_sort" @click="sort_table('Category')" data-message="Sort Ascending or Descending">
            Category
            <!-- sort icon -->
            <span v-if="sortAsc">
              <!-- up -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </span>
            <span v-else>
              <!-- down -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
              </svg>
            </span>
            <!-- /sort icon -->
            </button>
          </div>
          <div class="col-xs-12 col-sm-2">
            <p>Auth</p>
          </div>
          <div class="col-xs-12 col-sm-1">
            <p>HTTPS</p>
          </div>
        </div>
        <!-- /sorter -->
        <!-- main api list -->
        <div class="row apilist_holder">
          <div class="col-sm-12">
            <vcApiList
            :pr-api-list="apiList" />
          </div>
        </div>
        <!-- /main api list -->
      </div>
    </div>
  </div>
  <!-- /category list + api listing -->
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
        API_URL: "https://raw.githubusercontent.com/liquidnuker/public-apis/json/json/entries.json",
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
          search: "status.search"
        },
      };
    },
    components: {
      vcApiList: vcApiList,
      vcSearch: vcSearch,
    },
    mounted: function () {
      this.getApiData(this.API_URL);
      // this.getApiData(this.BACKUP_URL);
    },
    methods: {
      getApiData: function (url) {
        this.$Progress.start();

        axios.get(url)
          .then((response) => {
            this.apiTotalCount = response.data.count;
            this.apiListCache = response.data.entries;
            this.apiListFiltered = this.apiListCache;
            this.activatePager(this.apiListCache);
          })
          .then(() => {
            this.addFiltersList(this.apiListCache);
            this.$Progress.finish();
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
        console.log(num);
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
        this.status.search = "";
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
        // let t0 = performance.now();
        let res = search_fuse({
          data: this.apiListFiltered,
          value: store.fc.searchKeyword,
          searchKeys: ["API","Link"]
        });

        if (res.length === 0) {
          this.status.search = "No results found";
        } else {
          // let t1 = performance.now();
          // this.status.search = `Found ${res.length} items ${t1 - t0}`;
          this.status.search = `Found ${res.length} items`;
          this.activatePager(res);
          res = null;
          store.fc.searchKeyword = null;      
        }        
      },
      sort_table: function(sortBy) {
        this.sortAsc = !this.sortAsc;
        let sorted = arr_sortValue(sortBy, this.apiListFiltered);

        if (!this.sortAsc) {
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