<template>
<nav id="mainTopNav">
  <div class="message">
    <i class="fa-regular fa-message"></i>
    <div class="message-area">
      <div class="message-content" v-for="i in [0,0,0]">
        Akira Chen 的主頁開張摟~
      </div>
    </div>
  </div>
  <div class="right-tools">
    <div class="tools-item">
      <i class="fa-solid fa-question"></i>
      <div class="text">help</div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'mainNav',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  
  },
  mounted(){
  
  }
}
</script>

<style lang="postcss" scoped>
@media (max-width: 576px) {
  .right-tools {
    & .text {
      display: none;
    }
  }
}

#mainTopNav {
  height: 1.5rem;
  background-color: var(--main-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  & .message {
    display: flex;
    align-items: center;
    & i {
      margin-right: .5rem;
    }
    & .message-area {
      width: calc( 100vw * 3 - 5rem * 3);
      position: relative;
      overflow: hidden;
      display: flex;
      & .message-content {
        flex: 100%;
        animation: scroll 20s linear infinite;
      }
    }
  }
  & .right-tools {
    padding: 0 .5rem;
    height: 1.5rem;
    border-left: 2px var(--main-gray) solid;
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    background-color: var(--main-white);
    & .tools-item {
      display: flex;
      align-items: center;
      & i {
        margin-right: .5rem;
      }
    }
  }
}


@keyframes scroll{
  from{transform: translateX(100%)}
  to{transform: translateX(-100%)}
}
</style>