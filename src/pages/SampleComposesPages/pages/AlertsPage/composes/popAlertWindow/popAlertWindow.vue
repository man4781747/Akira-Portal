<template>
<SampleWindow>
  PopAlert - 跳出式提示框
  <template #testItem>
    <AlertItem :border_type="borderStyle" :info_type="infoStyle">
      <template #icon>
        <i :class="iconString"></i>
      </template>
      {{ textContent }}
    </AlertItem>
  </template>
  <template #textareaItem>
    <textarea class="example-item-text" readonly="readonly" v-model="alertsText"></textarea>
  </template>
  <template #inputItem>
    <div class="mb-3">
      <label class="form-label">text</label>
      <input class="form-control" v-model="textContent">
    </div>
    <div class="mb-3">
      <label class="form-label">icon - from <b>fontawesome</b></label>
      <input class="form-control" v-model="iconString">
    </div>
    <div class="mb-3">
      <label class="form-label">border style</label>
      <select class="form-select form-select-lg mb-3" v-model="borderStyle">
        <option selected>-</option>
        <option value="left">left</option>
        <option value="right">right</option>
        <option value="top">top</option>
        <option value="bottom">bottom</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">info type</label>
      <select class="form-select form-select-lg mb-3" v-model="infoStyle">
        <option selected>-</option>
        <option value="primary">primary</option>
        <option value="success">success</option>
        <option value="danger">danger</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="">顯示</div>
    </div>
  </template>
</SampleWindow>
</template>

<script>
import sampleWindow from '../../../../composes/sampleWindow/sampleWindow.vue'
import alertItem from '../../../../../../composes/alertItem/alertItem.vue'

export default {
  components: {
    "AlertItem": alertItem,
    "SampleWindow": sampleWindow,
    // "SampleWindow": ()=>import("../../../../composes/sampleWindow/sampleWindow.vue"),
    // "SampleWindow":resolve=>(['../../../../composes/sampleWindow/sampleWindow.vue'],resolve)
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
.example-card {
  border: 2px var(--main-gray) solid;
  padding: 0rem;
  overflow: hidden;
  background-color: transparent;
  & .card-header {
    color: var(--main-white);
    font-size: large;
    padding: .25rem 1rem !important;
  }
  & .card-body {
    display: flex;
    min-height: unset !important;
    padding: .5rem !important;

    & .example-area {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      border-right: 2px var(--main-gray) solid;
      & .example-item-area {
        flex: 80%;
        display: flex;
        align-items: center;
      }
      & .example-item-text {
        width: 100%;
        border-color: var(--main-gray);
        border-width: 2px 0 0 0;
        background-color: transparent;
        outline: none;
        box-shadow: none;
        resize: none;
        height: fit-content;
        height: 20rem;
        display: flex;
        align-items: center;
      }
    }
  }
}

.form-select {
  background-color: transparent;
  border: 2px var(--main-gray) solid;
}

.form-label {
  color: var(--main-dark-blue);
}

input {
  color: var(--main-dark-blue);
  background-color: transparent;
  border: 2px var(--main-gray) solid;
}
</style>