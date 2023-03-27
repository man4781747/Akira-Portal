<template>
  <nav id="mainSideBar">
    <router-link to="/" class="router-link-tag">
      <i class="fa-solid fa-house"></i>
    </router-link>
    <div class="hr-style"></div>
    <router-link to="/AboutMe" class="router-link-tag">
      <i class="fa-solid fa-user"></i>
    </router-link>
    <!-- <router-link to="/MyCat" class="router-link-tag">
      <i class="fa-solid fa-cat"></i>
    </router-link> -->
    <router-link to="/Slashie" class="router-link-tag">
      <i class="fa-solid fa-code"></i>
    </router-link>
    <!-- <div class="router-link-list-group">
      <div class="router-link-list-icon router-link-tag">
        <i class="fa-solid fa-swatchbook"></i>
      </div>
      <ul class="router-link-list" >
        <li class="router-link-tag">
          <i class="fa-solid fa-table-cells"></i>
        </li>
        <li class="router-link-tag">
          <i class="fa-solid fa-table-cells"></i>
        </li>
      </ul>
    </div> -->

    <div class="router-link-list-group">
      <!-- <router-link to="/SampleComposes" class="router-link-list-icon router-link-tag">
        <i class="fa-solid fa-sitemap"></i>
      </router-link> -->
      <div to="/SampleComposes" class="router-link-list-icon router-link-tag">
        <i class="fa-solid fa-sitemap"></i>
      </div>
      <ul class="router-link-list" >
        <li>
          <router-link class="router-link-tag" to="/SampleComposes/Alerts">
            <i class="fa-regular fa-bell"></i>
          </router-link>
        </li>
        <!-- <li class="router-link-tag">
          <i class="fa-solid fa-table-cells"></i>
        </li> -->
      </ul>
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
    /**
     * 物件初始渲染時，對class: router-link-list 做動作
     * 會去檢查 .router-link-list 下的 .router-link-tag 有幾項
     * 並設定其margin-top值為 -(N+1)*100+'%'
     * 假設有 5個.router-link-tag，則margin-top值 -600%;
     */
    setRouterLinkListMarginTopValue () {
      for (var classItem of document.getElementsByClassName("router-link-list")) {
        classItem.style.cssText = "margin-top: calc( -"+ (classItem.getElementsByClassName("router-link-tag").length+1)*100 + "% + 1.5rem );"
      }
    },
    setRouterLinkListIconClickEvent () {
      for (var classItem of document.getElementsByClassName("router-link-list-icon")) {
        classItem.onclick = function () {
          if (classItem.parentElement.classList.contains("clicked")) {
            classItem.parentElement.classList.remove("clicked")
          } else {
            classItem.parentElement.classList.add("clicked")
          }
        }
      }
    }

  },
  mounted(){
    this.setRouterLinkListMarginTopValue()
    this.setRouterLinkListIconClickEvent()
  }
}
</script>

<style lang="postcss" scoped>

@media (max-width: 768px) {
  #mainSideBar {
    left: -4rem;
    &.open {
      left: 0rem !important;
    }
  }
}

@media (min-width: 768px) {
  #mainSideBar {
    left: 0rem;
  }
}

#mainSideBar {
  background-color: var(--main-white);
  height: 100%;
  position: absolute;
  min-width: 4rem;
  width: 4rem;
  border-right: 2px var(--main-gray) solid;
  transition: all .5s;
  min-height: 70vh;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .hr-style {
    background-color: var(--main-gray);
    height: 2px;
    width: 80%;
    margin-top: 1rem;
  }
  & .router-link-tag{
    color: var(--main-gray);
    text-decoration: none;
    & i {
      margin-top: 1rem;
      height: 2.5rem;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2.5rem;
      transition: all .5s;
      background-color: var(--main-white);
      color: var(--main-gray);
    }
    &.router-link-active, &:hover {
      & i {
        background-color: var(--main-gray);
        color: var(--main-white);
      }
    }
  }
  & .router-link-list-group {
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
    &.clicked {
      & .router-link-list-icon {
        & i {
          background-color: var(--main-gray);
          color: var(--main-white);
        }
      }
      & .router-link-list {
        margin-top: -0% !important;
      }
    }


    & .router-link-list-icon {
      z-index: 3;
      background-color: var(--main-white);
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
      border-bottom-left-radius: 2.5rem;
      border-bottom-right-radius: 2.5rem;
      position: sticky;
      & i {
        margin-top: 0 !important;
      }
    }
    & .router-link-list {
      transition: margin-top .5s;
      margin-bottom: 0;
      list-style-type: none; 
      padding: 0;
      z-index: 2;
      position: sticky;
      & i {
        border: 4px var(--main-gray) solid;
      }
    }
    &::after {
      content: "";
      height: calc( 100% - 5rem );
      position: absolute;
      width: 6px;
      background-color: var(--main-gray);
      top: 2.5rem;
      left: calc( 1.25rem - 3px );
      z-index: 1;
    }
    
  }
}
</style>