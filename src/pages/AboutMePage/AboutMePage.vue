<template>
  <div class="about-me-page">
    <div class="main-pic-area">
      <img src="../../assets/my-main-pic_2_o.jpg" alt="">
      <div class="about-ma-content">
        <h1>陳彥凱
          <label>Akira Chen</label>
        </h1>
        <div class="description-area">
          <div class="subtitle">一枚小小的工程師</div>
          <div class="content">
            寫程式是興趣，
            吸貓是生活，
            睡覺是工作，我愛我的工作
          </div>
        </div>
      </div>
    </div>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">自我介紹</h2>
    <div class="" style="line-height: 2rem;">
      桃園人，興趣是寫程式，主要在寫網頁前端與後端的專案，有能力獨自完成包辦前後端的專案。<br>
      後端主要使用Python的<b>Django、Flask、FastAPI</b>撰寫。<br>
      擅長使用<b>Docker</b>與<b>Docker-Compose</b>再利用<b>GCP</b>來建立自己的服務<br>
      近期有空閒時都在學習硬體相關的知識，目前熱愛使用<b>ESP32-S3</b>。
    </div>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">擁有技能</h2>

    <div class="" style="line-height: 2rem;">
      <ul class="job-history-list">
        <li class="job-group">
          <p class="job-title">軟體相關技能</p>
          <div class="job-description">
            主要技能圍繞網頁前後端來學習
            <ol>
              <li class="job-type">
                後端技能 - 主要使用語言: Python
                <ul>
                  <li>HTTP API Service 使用框架: <b>Flask、FastAPI、Django</b></li>
                  <li>容器化相關使用經驗: <b>Docker、Docker-Compose</b></li>
                  <li>接觸過的資料庫: <b>PostgreSQL, MongoDB, Redis, Splunk</b></li>
                </ul>
              </li>
              <li class="job-type">
                前端技能 - 主要使用 Vue2/Vue3
                <ul>
                  <li>輔助框架: <b>Vite</b></li>
                  <li>常用CSS框架: <b> PostCSS, Bootstrap</b></li>
                  <li>使用過的通訊協議: <b>HTTP/1.1、WebSocket</b></li>
                </ul>
              </li>
              <li class="job-type">
                硬體技能
                <ul>
                  <li>使用 MCU 經驗: <b>ESP32、ESP32-S3(較多)、Arduino</b></li>
                  <li>常使用之通訊協議: <b>I2C、SPI、UART、RS485、CANBus、Modbus</b></li>
                  <li>3D繪圖工具: <b>SolidWorks</b></li>
                  <li>EDA工具: <b>EasyEDA (嘉立創線上工具)</b></li>
                </ul>
              </li>
              <li class="job-type">
                雲端相關技能
                <ul>
                  <li>主要使用雲端服務: <b>GCP</b></li>
                  <ul>
                    <li>多使用 <b>Compute Engine、Cloud Storage、Cloud function、Cloud Schedler、平衡附載、HTTPS憑證申請</b>...等功能</li>
                  </ul>
                </ul>
              </li>
            </ol>
          </div>
        </li>

      </ul>
    </div>

    <div class="skill-lsit" v-if="false">
      <div class="skill-tag">語言 : Python</div>
      <div class="skill-tag">後端框架 : Django</div>
      <div class="skill-tag">後端框架 : Flask</div>
      <div class="skill-tag">後端框架 : FastAPI</div>
      <div class="skill-tag">前端框架 : Vue</div>
      <div class="skill-tag">前端框架 : VueCli</div>
      <div class="skill-tag">前端框架 : Vite</div>
      <div class="skill-tag">Docker</div>
      <div class="skill-tag">Docker-Compose</div>
      <div class="skill-tag">Git flow</div>
      <div class="skill-tag">Gitlab</div>
      <div class="skill-tag">Gitlab CI CD服務架設&使用</div>
      <div class="skill-tag">GCP</div>
      <div class="skill-tag">ESP32</div>
      <div class="skill-tag">ESP32-S3</div>
      <div class="skill-tag">Arduino</div>
      <div class="skill-tag">EDA</div>
      <div class="skill-tag">PostgreSQL</div>
    </div>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">工作經歷</h2>
    <div class="" style="line-height: 2rem;">
      <ul class="job-history-list">
        <li class="job-group">
          <p class="job-title">艾滴科技。自動化電控工程師</p>
          <p class="job-date">2023/04 - 至今</p>
          <div class="job-description">
            主要負責設計、改善&製作自動化養殖所需之儀器，其中使用 ESP32-S3 為主要 MCU，在 Arduino 框架下製作自動化水質監測儀器
            <ol>
              <li class="job-type">
                設計 IoT 相關儀器韌體，使儀器有複數 OTA 更新功能，令使用者可選擇透過操作網頁更新、自動檢測更新...等方法更新儀器
              </li>

              <li class="job-type">
                使用 Vite 與 Vue3 製作儀器專用控制網站
                <ul>
                  <li>混合使用 WebSocket、HTTP 協議來使儀器具有即時操作能力且資源消耗降低</li>
                </ul>
              </li>
              <li class="job-type">
                使用 Solidwork 繪製儀器機構，並與廠商溝通製作
              </li>
              <li class="job-type">
                使用 EDA 設計儀器及其感測器電路，並自行採購各式 IC 元件製作儀器所需模組
              </li>
              <li class="job-type">
                化學試劑配置
              </li>
              <li class="job-type">
                除程式與硬體端設計外，另有為現有儀器進行優化、降低成本以及使用市購件取代訂製件...等工作內容
              </li>
            </ol>
          </div>
        </li>
        <li class="job-group">
          <p class="job-title">國泰人壽。資料工程師</p>
          <p class="job-date">2021/08 - 2023/04</p>
          <div class="job-description">
            負責部門內有關伺服器後台及前台之業務
            <ol>
              <li class="job-type">
                前端使用Vite及Vue/Cli製作了
                <ul>
                  <li>部門專用之工作管理系統網頁，使部門同仁工作效率提升，資料、文件留存軌跡明確好搜查</li>
                  <li>自主定義系統排程網頁，配合python Jupyter以及Airflow，讓部門同仁可以用最低的時間成本來設定排程，加速工作效率</li>
                  <li>部門Portal網頁，統整部門同仁日常所需工具連結，顯示日常工作重要訊息，讓同仁日常工作不再混亂、找不到所需工具</li>
                  <li>各種臨時性網頁需求，如重要部門活動之互動性遊戲網頁、各式產品POC網頁...等等等</li>
                </ul>
              </li>

              <li class="job-type">
                後端使用python Flask、FastAPI、Django，搭配Docker建立各網頁後台以及API系統需求
              </li>

              <li class="job-type">
                利用Docker 建立及維護
                <ul>
                  <li>部門內Gitlab系統，並利用Gitlab runner建立Gitlab CI CD系統工具</li>
                  <li>部門內MediaWiki系統，使部門知識得以快速搜尋及保留</li>
                  <li>postgreSQL資料庫、LDAP帳號管理系統，支持部門內各項服務之運作</li>
                </ul>
              </li>
              <li class="job-type">
                使用GCP建立多項服務，並建立HTTPS網頁，同時支援平衡附載功能
              </li>
              <li class="job-type">
                處理GCP服務合約簽訂及核銷
              </li>
            </ol>
          </div>
        </li>
        <li class="job-group">
          <p class="job-title">聯發科技。軟體工程師</p>
          <p class="job-date">2020/03 - 2021/08</p>
          <div class="job-description">
            負責設計與製作部門內提升工作效率之工具服務
            <ol>
              <li class="job-type">使用VueJS與Django製作了自動化系統，減少同仁工作時間成本，並連結Outlook寄出提醒信件，使同仁不漏掉重要訊息</li>
              <li class="job-type">使用pyqt製作小型工具，使同仁可以簡單上傳工作進度至Redmind</li>
              <li class="job-type">使用C#製作開會小工具，蒐集開會時各項資訊(開會時長、報告時長等)，並可以定時跳出提醒視窗</li>
              <li class="job-type">使用python與plotly製作工具，分析各debug log資訊，使同仁可以更容易找到問題點</li>
              <li class="job-type">處理部門內Splunk之各項需求，製作Dashbord</li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">斜槓經歷</h2>
    <router-link to="/Slashie">
      <i class="fa-solid fa-code"></i>開啟協槓經歷頁面
    </router-link>
    <!-- <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">作品集</h2> -->
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">學歷</h2>
    <div class="school-list row">
      <div class="school-data col-12 col-sm-6">
        <img src="../../assets/NCKU.png" alt="">
        <div class="school-info">
          <p>成功大學</p>
          <div class="desp">地球科學系</div>
          <div class="date">2012/9~2016/6 </div>
        </div>
      </div>
      <div class="school-data col-12 col-sm-6">
        <img src="../../assets/NCKU.png" alt="">
        <div class="school-info">
          <p>成功大學</p>
          <div class="desp">地球科學所 - 電漿、太空、大氣偶合研究室</div>
          <div class="date">2016/7~2018/7 </div>
          <label style="font-size: .8em;">論文題目: <b>電離層磁暴與電漿泡效應對全球衛星定位系統之影響</b></label>
        </div>
      </div>
    </div>
    <div class="hr-style" style="margin: 2rem 0;"></div>
    <h2 class="paragraph">特殊經歷</h2>
    <div class="">
      <ul>
        <li>
          探空儀器製作 - <a href="https://news.ltn.com.tw/news/life/breakingnews/2304828" target="_blank">https://news.ltn.com.tw/news/life/breakingnews/2304828</a>
        </li>
        <li>
          擁有之專利:
          <ul>
            <li>雨量計系統: <a href="https://tiponet.tipo.gov.tw/gpss2/gpsskmc/gpssbkm?!!FRURLTWM633769U" target="_blank">TWM633769U</a></li>
            <li>水情監測設備: <a href="https://tiponet.tipo.gov.tw/gpss2/gpsskmc/gpssbkm?!!FRURLTWM650854U" target="_blank">TWM650854U</a></li>
          </ul>
        </li>
      </ul>
    </div>
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

@media (max-width: 576px) {
  .about-me-page {
    font-size: 1.2rem !important;
  }
  .main-pic-area {
    & img {
      height: 25vw !important;
      border-radius: 10rem;
      margin-right: 2rem !important;
      position: absolute;
      right: -1rem;
      margin: 0;
      top: 1rem;
    }
    & .subtitle {
      font-size: 2rem !important;
    }
    & h1 {
      font-size: 3rem !important;
      & label {
        font-size: 1.1rem !important;
      }
    }
  }

  .job-history-list {      
    list-style-type: none;
    padding: 0;
  }

  .school-list .school-data:not(:last-child) {
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .main-pic-area {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .main-pic-area {
    font-size: 1rem;
  }
}

.about-me-page {
  font-size: 1.5rem;
  & .job-history-list {
    & .job-group {
      margin-top: 2rem;
    }
    & .job-title {
      font-weight: bold;
      margin-bottom: 4px;
      font-size: 1.8rem;
    }
    & .job-date {
      font-size: 1.2rem;
    }
    & .job-description {
      & .job-type {
        margin-top: .75rem;
        & li {
          margin-top: .25rem;
          font-size: 1.1rem;
        }
      }
    }
  }
}
.main-pic-area {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & img {
    transition: all .5s;
    height: 15rem;
    border-radius: 15rem;
    margin-right: 2rem;
  }
  & .about-ma-content {
    & h1 {
      font-size: 5rem;
      font-weight: bolder;
      display: flex;
      flex-direction: column;
      & label {
        font-size: 1.2rem;
      }
    }
    & .description-area {
      & .subtitle {
        font-size: 3rem;
        font-weight: bolder;
      }
      & .content {
      }
    }
  }
}

.school-list {
  & .school-data {
    display: flex;
    & img {
      height: 100px;
    }
    & .school-info {
      margin-left: 1rem;
      & p {
        margin: 0;
        font-weight: bold;
      }
      & .date {
        font-size: 1.2rem;
      }
    }
  }
}

.skill-lsit {
  display: flex;
  flex-wrap: wrap;
  & .skill-tag {
    font-size: 1rem;
    height: 1.6rem;
    padding: 0 .8rem;
    margin: 4px;
    border-radius: 1.6rem;
    background-color: var(--main-gray);
    color: var(--main-white);
    display: flex;
    align-items: center;
  }
}
</style>