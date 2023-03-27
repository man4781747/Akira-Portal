<script setup>
</script>

<template>
<div class="" style="min-height: 100vh; overflow-x: hidden;position: relative;">
  <MainNav/>
  <div id="main-page-area" class="card">
    <div class="card-header">
      <div class="top-header">
        <div class="small-icon-list">
          <i class="fa-solid fa-plane"></i>
          <i class="fa-solid fa-plane"></i>
          <i class="fa-solid fa-plane"></i>
        </div>
        <div class="page-tab-list">
          <div :to="pageData.path" class="page-tab-item " v-for="(pageData,index) in openedPageList"
            :class="nowPath===pageData.path?'':'close-tag'"
          >
            <router-link :to="pageData.path" class="router-link-item" 
              :class="index < acticeTagIndex?'left-tag':index > acticeTagIndex?'right-tag':''"
            >{{ pageData.name }}</router-link>
            <i class="fa-solid fa-circle-xmark" @click.stop="deleteTag(index)"></i>
          </div>
        </div>
      </div>
      <div class="tool-bar">
        <div class="btn-list">
          <i class="fa-solid fa-bars" style="overflow: hidden;" @click="mainSideBarOpen = !mainSideBarOpen"
            :style="mainSideBarOpen?'color: var(--main-gray);':''"
          ></i>
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right"></i> 
        </div>
        <div class="url-like-area">
          <div class="url-like-area-bk">
            {{ nowPath }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <mainSideBar :class="mainSideBarOpen?'open':''"/>
      <div class="router-area">
        <router-view/>
      </div>
    </div>
  </div>
  <div id="main-footer">
    Edited By <b>Akira Chen</b>  <em style="margin-left: 1rem;">man4781747@gmail.com</em>
    <b style="float: right;">V1.0.0</b>
  </div>
</div>
</template>

<script>
import mainNav from "./composes/mainNav/mainNav.vue"
import mainSideBar from "./composes/mainSideBar/mainSideBar.vue"


export default {
  name: 'App',
  components: {
    "MainNav": mainNav,
    "mainSideBar": mainSideBar,
  },
  data() {
  return {
    mainSideBarOpen: false,
    openedPageList: [],
  }
  },
  watch: {
    "$route": function() {
      if (this.tagNameSet.has(this.$route.path) === false) {
        this.openedPageList.push(JSON.parse(JSON.stringify(this.$route)))
      }
    }
  },
  computed: {
    nowPath () {
      return this.$route.fullPath
    },
    tagNameSet () {
      var returnSet = new Set()
      for (let D_pageData of this.openedPageList) {
        returnSet.add(D_pageData.path)
      }
      return returnSet
    },
    acticeTagIndex () {
      var index = 0
      for (let D_pageData of this.openedPageList) {
        if (D_pageData.path === this.nowPath) {
          return index
        }
        index += 1
      }
    }
  },
  methods: {
    deleteTag (I_tagIndex) {
      if (this.openedPageList.length === 1 & this.openedPageList[0].path==="/") {
        return null
      }
      this.openedPageList.splice(I_tagIndex, 1);
      if (this.openedPageList.length === 0) {
        this.$router.push('/')
      } 
      else if (this.openedPageList.length === I_tagIndex) {
        this.$router.push(this.openedPageList[I_tagIndex-1])
      }
      else {
        this.$router.push(this.openedPageList[I_tagIndex])
      }
    },
  },
  mounted(){
    window.test = this
  }
}

</script>
<style lang="postcss">
:root {
  --main-pink: rgb(255, 123, 138);
  --main-green: rgb(45, 124, 68);
  --main-dark-blue: rgb(28, 38, 63);
  --main-blue: rgb(28, 38, 63);
  --main-gray: rgb(136, 117, 118);
  --main-light-gray: rgb(210, 194, 196);
  --main-white: rgb(255, 240, 237);
  --page-background-color: var(--main-pink);
  --body-background-color: var(--main-blue);
  --header-background-color: var(--main-pink);
}

body {
  background-color: var(--body-background-color);
  color: var(--main-gray);
}

@media (max-width: 576px) {
}

@media (min-width: 576px) {
}


@media (max-width: 768px) {
  #main-page-area {
    margin: 0;
    & .router-area {
      margin-left: 0rem;
      width: calc( 100% - 0rem );
    }
  }
  .tool-bar .btn-list i {
    margin-right: 1rem !important;
    &.fa-bars {
      width: 4rem;
      margin-left: -1rem;
      text-align: center;
      border-right: 2px var(--main-white) solid;
    }
  }
}

@media (min-width: 768px) {
  #main-page-area {
    margin: 1.5rem;
    & .router-area {
      margin-left: 4rem;
      width: calc( 100% - 4rem );
    }
  }
  .tool-bar .btn-list i {
    &.fa-bars {
      width: 0rem;
      text-align: center;
      margin-left: 0rem;
      margin-right: 0rem !important;
    }
  }
}

#main-page-area {
  margin-bottom: 4rem;
  transition: all .5s;
  overflow: hidden;
  border: 0;
  & .card-header {
    padding: 0;
    border: 0;
    background-color: var(--main-gray);
    & .tool-bar {
      background-color: var(--main-light-gray);
      height: 3rem;
      color: var(--main-white);
      display: flex;
      align-items: center;
      padding: 0 1rem;
      font-size: 1.5rem;
      & .btn-list {
        display: flex;
        align-items: center;
        & i {
          transition: all .5s;
          margin-right: 1rem;
        }
      } 
      & .url-like-area {
        display: flex;
        justify-content: center;
        & .url-like-area-bk {
          width: 100%;
          background-color: var(--main-white);
          border-radius: 1.5rem;
          height: 1.8rem;
          color: var(--main-gray);
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.8rem;
        }
        flex: 75%;
      }
    }
    & .top-header {
      height: 3rem;
      position: relative;
      display: flex;
      & .small-icon-list {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 8px;
        & i {
          margin: 0 4px;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 1.5rem;
          background-color: var(--main-white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--main-gray);
          font-size: .8rem;
        }
      }

      & .page-tab-list {
        display: flex;
        & .page-tab-item {
          width: 10rem;
          margin-top: .5rem;
          border-top-left-radius: .5rem;
          border-top-right-radius: .5rem;
          background-color: var(--main-light-gray);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 .5rem ;
          color: var(--main-dark-gray);
          text-decoration: none;
          transition: all .5s;
          & .router-link-item {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            color: var(--main-dark-gray);
            text-decoration: none;
          }
          &.close-tag {
            background-color: var(--main-dark-gray);
            color: var(--main-white);
            position: relative;
            &:has(.left-tag)::after {
              content: "";
              position: absolute;
              left: 0;
              border-left: 2px var(--main-light-gray) solid;
              height: 60%;
            }
            &:has(.right-tag)::after {
              content: "";
              position: absolute;
              right: 0;
              border-right: 2px var(--main-light-gray) solid;
              height: 60%;
            }
          }
        }
      }
    }
  }
  & .card-body {
    border: 0;
    padding: 0;
    background-color: var(--main-white);
    position: relative;
    display: flex;
    min-height: 75vh;
    & .router-area {
      min-width: 375px;
      transition: all .5s;
      padding: 1rem;
    }
  }
}

.hr-style {
  width: 100%;
  height: 2px;
  background-color: var(--main-gray);
}

.paragraph {
  font-weight: bold;
  font-size: 2.5rem;
}

#main-footer {
  margin-top: 1rem;
  height: 1.5rem;
  width: 100%;
  background-color: var(--main-white);
  position: absolute;
  bottom: 0;
  padding: 0 .5rem;
}
</style>