<template>
<div>
  <table class="col-xs-12 apilist_table">
    <tbody>
      <tr v-for="i in prApiList" class="row">
        <td class="col-xs-12 col-sm-7">
          <p>{{ i.API }}</p>
          <summary>
          <p>{{ i.Description }}</p>
          </summary>
          <a :href="i.Link">{{ i.Link }}</a>
        </td>
        <td class="col-xs-12 col-sm-2">
          <p>{{ i.Category }}</p>
        </td>
        <td class="col-xs-12 col-sm-2">
          <p v-if="!i.Auth">&nbsp;</p>
          <p>{{ i.Auth }}</p>
        </td>
        <td class="col-xs-12 col-sm-1">
          <p v-if="i.HTTPS">&#x2714;</p>
          <p v-else="i.HTTPS">&nbsp;</p>
        </td>
      </tr>
    </tbody>
  </table>
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