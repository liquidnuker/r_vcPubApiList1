<template>
<div>
  <span v-if="apiStatus">
    Status:
    <a href="https://travis-ci.org/toddmotto/public-apis">
    <img src="https://travis-ci.org/toddmotto/public-apis.svg?branch=master" />
    </a>
  </span>
  {{ apiTotalCount }}

  <div class="row">
    <div class="col-sm-3">
      <!-- filters -->
      <ul>
        <li v-for="i in categoryTypes">
          {{ i }}
        </li>
      </ul>
      <br>
      <br>

      <ul>
        <li v-for="i in authTypes">
          {{ i }}
        </li>
      </ul>
    </div>
    <div class="col-sm-9">
      <!-- main listing -->
      <ul>
        <li v-for="i in apiList">
          {{ i }}
          <!-- {{ i.API }} -->
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
      return {
        API_URL: "https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json",
        BACKUP_URL: "./entries_offline.json",

        apiListCache: "", // default unfiltered items
        apiTotalCount: "",
        apiList: "",

        categoryTypes: "",
        authTypes: "",


        apiStatus: false
      };
    },
    mounted: function () {
      // this.getApiData(this.API_URL);
      this.getApiData(this.BACKUP_URL);
    },
    methods: {
      getApiData: function (url) {
        let self = this;
        axios.get(url)
          .then(function (response) {
            self.apiTotalCount = response.data.count;
            self.apiListCache = response.data.entries;
            self.apiList = self.apiListCache;
          })
          .then(function () {
            self.addFiltersList();
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              self.getApiData(self.BACKUP_URL);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              self.getApiData(self.BACKUP_URL);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      },
      addFiltersList: function () {
        this.categoryTypes = this.extractUnique(this.apiList, "Category");
        this.authTypes = this.extractUnique(this.apiList, "Auth");
      },
      extractUnique: function (arr, cat) {
        let o = {};
        let temp = [];
        for (var i = 0; i < arr.length; i++) {
          if (!o[arr[i][cat]]) {
            o[arr[i][cat]] = true;
            temp.push(arr[i][cat]);
            // r.push(arr[i].Category);
          }
        }
        return temp;
      }
    }
};
</script>