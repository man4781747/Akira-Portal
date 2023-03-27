<template>
<div class="alert-item" ref="this_item">
  <div class="icon-area">
    <slot name="icon"></slot>
  </div>
  <slot>Default Text</slot>
</div>
</template>

<script>
export default {
  props: ["border_type", "info_type"],
  data () {
  return {
  }
  },
  watch: {
    "border_type": {
      handler: function () {
        this.setBorderStyle();
      },
    },
    "info_type": {
      handler: function () {
        this.setInfoStyle();
      },
    },
  },
  computed:{
  },
  methods:{
    setBorderStyle () {
      if (this.border_type === "left") {
        this.$refs["this_item"].classList.add("border-left-style")
      } else {
        this.$refs["this_item"].classList.remove("border-left-style")
      }
      if (this.border_type === "right") {
        this.$refs["this_item"].classList.add("border-right-style")
      } else {
        this.$refs["this_item"].classList.remove("border-right-style")
      }
      if (this.border_type === "top") {
        this.$refs["this_item"].classList.add("border-top-style")
      } else {
        this.$refs["this_item"].classList.remove("border-top-style")
      }
      if (this.border_type === "bottom") {
        this.$refs["this_item"].classList.add("border-bottom-style")
      } else {
        this.$refs["this_item"].classList.remove("border-bottom-style")
      }
    },
    setInfoStyle () {
      if (this.info_type === "danger") {
        this.$refs["this_item"].classList.add("type-danger-style")
      } else {
        this.$refs["this_item"].classList.remove("type-danger-style")
      }

      if (this.info_type === "success") {
        this.$refs["this_item"].classList.add("type-success-style")
      } else {
        this.$refs["this_item"].classList.remove("type-success-style")
      }

      if (this.info_type === "primary") {
        this.$refs["this_item"].classList.add("type-primary-style")
      } else {
        this.$refs["this_item"].classList.remove("type-primary-style")
      }
    },
  },
  mounted () {
    this.setBorderStyle()
    this.setInfoStyle()
  }
}
</script>
<style lang="postcss" scoped>
/* https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting */
.alert-item {
  padding: 16px;
  border-radius: 4px;
  background-color: var(--main-gray);
  color: var(--main-white);
  width: min-content;
  white-space:nowrap;
  display: flex;
  position: relative;
  overflow: hidden;
  height: min-content;
  margin-bottom: 8px;
  transition: all .5s;
  & .icon-area {
    margin-right: 1rem;
  }
  &::after {
    content: "";
    background-color: var(--main-white);
    opacity: .3;
    position: absolute;
  }
  &.border-left-style::after {
    width: 6px;
    height: 100%;
    left: 0;
    top: 0;
  }
  &.border-right-style::after {
    width: 6px;
    height: 100%;
    right: 0;
    top: 0;
  }
  &.border-top-style::after {
    width: 100%;
    height: 6px;
    right: 0;
    top: 0;
  }
  &.border-bottom-style::after {
    width: 100%;
    height: 6px;
    right: 0;
    bottom: 0;
  }

  &.type-danger-style {
    background-color: var(--main-pink) !important;
  }
  &.type-success-style {
    background-color: var(--main-green) !important;
  }
  &.type-primary-style {
    background-color: var(--main-blue) !important;
  }
}
</style>