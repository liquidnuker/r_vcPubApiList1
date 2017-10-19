<template>
<div>
  <span class="apilist_search">
    <label for="api_search">Search {{ prCurrentCategory }}:</label>
    <input type="search"
    name="api_search"
    id="api_search"
    placeholder="Enter keyword/s..."
    :value="keyword"
    v-model="keyword"
    @keyup.enter= "search(keyword)" /><button
    class="btn btn1-01" data-message="Search the api listing" 
    @keyup.enter= "search(keyword)" 
    @click= "search(keyword)">Search</button>
  </span>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      keyword: ""
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prCurrentCategory"
  ],
  components: {
  },
  mounted: function () {
    
  },
  methods: {       
    search: function(keyword) {
      store.fc.searchKeyword = keyword;
      this.$emit('search');
    } 
  }
}
</script>