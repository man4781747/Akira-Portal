<template>
  <article class="">
    <header>
      <h2 class="paragraph">斜槓人生</h2>
      <p>
        硬體、韌體、軟體。電子的世界太多有趣的東西，人類為什麼會需要睡覺呢?<br>
        在不影響正職的情況下常接一些寫程式的案子，硬韌軟體的來者不拒<br>
        能力有餘就願意嘗試，多方接觸各種不同領域，多角化經營<br>
        希望有天可以開間屬於自己的工作室!
      </p>
      <p class="h3" style="text-align: end;">-- 若有任何需求，歡迎洽詢喔!!</p>
    </header>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <section>
      <img src="@/assets/ESP32-S3_IC.jpg" alt="esp32-s3" style="float:right;width:150px;">
      <p class="paragraph">硬體相關專案</p>
      <p><em>因大多案例有保密需求，暫無法提供詳細內容</em></p>
      <p>
        目前大多使用ESP32或ESP32-S3來製作各種儀器、工具<br>
        相比Arduino來說，ESP32系列擁有雙核心CPU並且pin腳更多更自由<br>
        比起STM32系列來說ESP32系列更加便宜<br>
        比起樹莓派系列來說ESP32系列更加省電 (雖然這樣比有些不正確，畢竟樹莓派不算是MCU的範疇...)<br>
        ESP32系列甚至自帶WiFi與藍芽功能，是真D香。
      </p>
      <p>
        目前有使用ESP32製作了以下專案
      </p>
      <p class="h3">
        一、雨量計  (目前已量產約 30 台並且商用運轉中)
      </p>
      <p>
        為一記錄雨量資訊之儀器<br>
        運用了ESP32本身自帶的ULP協處理器(要寫彙編語言...)，並搭配深度休眠功能來達到省電目的<br>
        並利用IOT技術將監測資料上傳至雲端伺服器，搭配太陽能供電系統來使儀器達到自給自足<br>
        <a href="https://tiponet.tipo.gov.tw/gpss2/gpsskmc/gpssbkm?!!FRURLTWM633769U" target="_target">專利證書號數：M633769</a>
      </p>
      <p class="h3">
        二、RFID偵測 (樹莓派)
      </p>
      <p>
        為一偵測坡體、壩體上的RFID標籤之儀器<br>
        利用樹莓派與市售RFID模組來偵測待測物是否尚存在、是否移位<br>
        並利用IOT技術將監測資料上傳至雲端伺服器
      </p>
      <p class="h3">
        三、水情監測設備 (目前已量產約 200 台並且商用運轉中)
      </p>
      <p>
        整合了水位、流速、濁度、9軸感測器...等功能之環境監測儀器<br>
        運用了ESP32-S3製作、並利用IOT技術將監測資料上傳至雲端伺服器，搭配太陽能供電系統來使儀器達到自給自足<br>
        <a href="https://tiponet.tipo.gov.tw/gpss2/gpsskmc/gpssbkm?!!FRURLTWM650854U" target="_target">專利證書號數：M650854</a>
      </p>
      <p class="h3">
        四、地下水監測儀器
      </p>
      <p>
        製作中......
      </p>
      <p class="h3">
        五、其餘各式自我研究用小專案
      </p>
      <ul>
        <li>支援DP充放電、太陽能MPPT充電、1~4串離電池充放電模組</li>
        <li>FOC向量控制模組(多版本，最高可支援30A電流)</li>
        <li>FOC向量控制模組為基底製作之雙輪平衡車</li>
        <li>自製時鐘&各式感測器</li>
      </ul>
    </section>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <section>
      <p class="paragraph">軟體相關專案</p>
      <p><em>少數案例有保密需求，暫無法提供詳細內容</em></p>
      <p>
        處理領域橫跨前端網頁、後端伺服器、資料庫架設...等<br>
        邊做邊學，希望技能樹同時兼顧廣度與深度
      </p>
      <p class="h3">
        一、雨量計伺服器 - 前端網頁&後台伺服器&資料庫系統需求
      </p>
      <p>
        為了支援雨量計儀器而生的系統<br>
        與另外2位合作人製作了整套完整的系統，包含了前後端&資料庫<br>
        並應用了Gitlab CI CD來使開發&測試&上架流程更加有規範與一致性<br>
        並使合作開發更加流暢
      </p>
      <p class="h3">
        二、水情監測設備 - 前端網頁&後台伺服器&資料庫系統需求
      </p>
      <p>
        為了支援水情監測設備而生的系統<br>
        完全由個人囊括了前端資訊網頁、後端API伺服器、後端資料庫、硬體儀器API設計的專案<br>
        首次導入 Redis 的使用，使前端網頁的使用體驗提升數倍，並提升整體系統的穩定性
      </p>
      <p class="h3">
        三、多項心理衡鑑工具網頁版 - 前端網頁需求
      </p>
      <p>
        為中原大學-睡眠研究室 製作之測驗網頁<br>
        將現有之測驗電子化(不然心理師需要以桌遊之形式測驗受試者)<br>
        電子化改善了測驗的耗時，並達到了一致性
      </p>
      <p class="h3">
        四、北醫運動手錶資料自動化提取&整理小工具 - 自動化工具
      </p>
      <p>
        為北醫人員設計隻小城市<br>
        可自動化操作醫事人員日常需要手動操作之功能，解放他們的雙手<br>
        原本需要1周多手動處裡的資訊，縮短至1~2小時即可完成處理，且排除了人為操作失誤的風險
      </p>
    </section>
  </article>
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

</style>