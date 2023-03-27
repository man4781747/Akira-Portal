<template>
  <div class="">
    <h2 class="paragraph">公告</h2>
    <table id="announcement-area">
      <colgroup>
        <col style="width: 10rem;">
        <col style="">
      </colgroup>
      <tbody>
        <tr><th>2023-01-19</th><td>網頁開張拉</td></tr>
        <tr><th>2023-01-20</th><td>斜槓頁面&範例元件頁面完成</td></tr>
      </tbody>
    </table>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">關於這個網頁</h2>
    <section>
      <p>
        這個網頁前端是使用了 Vue 3 編寫的，並使用了Vite做為開發環境<br>
        並使用了vue-router與Vuex來做延伸的應用<br>
        CSS的框架使用了postcss-nesting<br>
        另外還依賴於 fontawesome 6.2.1 與 Bootstrap v5.3<br>
        除此之外都是作者全部刻出來的，某些功能與風格參照了Vuetify<br>
        希望可以慢慢的完善這個網頁，並順帶紀錄&練習所學到的知識技術
      </p>
    </section>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">未來計畫</h2>
    <section>
      <p>完善各項功能，如:</p>
      <ul>
        <li>自訂義視窗排版功能</li>
        <li>自訂義網頁色彩模式</li>
        <li>各式UI組件範例工具，如:按鈕、Card、Pop windows...等</li>
        <li>使手機排版更加美麗</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
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
#announcement-area {
  margin-top: 2rem;

}
</style>