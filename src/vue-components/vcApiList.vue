<template>
<div>
  <ul>
    <li v-for="i in prApiList">
      {{ i }}
      <!-- {{ i.API }} -->
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {   

    }
  },
  props: [
    "prApiList"
  ],
  components: {
  },
  mounted: function () {
  },
  methods: {        
  }
}
</script>