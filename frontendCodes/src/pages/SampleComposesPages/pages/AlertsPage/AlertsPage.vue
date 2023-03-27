<template>
  <div class="">
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <SimpleAlertWindow/>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <PopAlertWindow/>
  </div>
</template>

<script>
import simpleAlertWindow from './composes/simpleAlertWindow/simpleAlertWindow.vue'
import popAlertWindow from './composes/popAlertWindow/popAlertWindow.vue'
export default {
  components: {
    "SimpleAlertWindow": simpleAlertWindow,
    "PopAlertWindow": popAlertWindow
  },
  data () {
  return {
    textContent: "123",
    borderStyle: "-",
    infoStyle: "-",
    iconString: "fa-regular fa-circle-check"
  }
  },
  computed:{
    alertsText () {
      // <template #icon>
      //   <i class="fa-regular fa-circle-check"></i>
      // </template>

      var resurnString = "<AlertItem"
      if (this.borderStyle !== "-") {
        resurnString += ' border_type="'+this.borderStyle+'"'
      }
      if (this.infoStyle !== "-") {
        resurnString += ' info_type="'+this.infoStyle+'"'
      }
      resurnString += ">\n  <template #icon>\n"
      resurnString += '    <i class="fa-regular fa-circle-check"></i>\n'
      resurnString += "  </template>\n  "
      resurnString += this.textContent+"\n</AlertItem>"
      return resurnString
    }
  },
  methods:{
  },
}
</script>
<style lang="postcss" scoped>
/* https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting */
</style>