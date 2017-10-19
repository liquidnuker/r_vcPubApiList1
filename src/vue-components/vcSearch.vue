<template>
<div>
  <span class="apilist_search">
  <label for="api_search">Search {{ prCurrentCategory }}:</label>
  <input type="text"
  name="api_search"
  id="api_search"
  placeholder="Enter keyword/s..."
  @keyup.enter= "search($event.target.value)"  />
  </span>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   

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