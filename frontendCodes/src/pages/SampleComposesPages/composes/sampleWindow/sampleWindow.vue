<template>
<div class="card example-card">
  <div class="card-header">
    <slot></slot>
  </div>
  <div class="card-body row">
    <div class="example-area col-12 col-sm-8">
      <div class="example-item-area">
        <slot name="testItem"></slot>
      </div>
      <slot name="textareaItem"></slot>
    </div>
    <div class="example-ctrl col-12 col-sm-4">
      <slot name="inputItem"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
  },
  data () {
  return {
  }
  },
  computed:{
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
    }
  }
}
</style>