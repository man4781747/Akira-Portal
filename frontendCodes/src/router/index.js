import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/HomePage/HomePage.vue'
import AboutMe from '/src/pages/AboutMePage/AboutMePage.vue'
import SlashiePage from '/src/pages/SlashiePage/SlashiePage.vue'
// import AlertsPages from '/src/pages/SampleComposes/pages/AlertsPages/AlertsPages.vue'
import AlertsPages from '../pages/SampleComposesPages/pages/AlertsPage/AlertsPage.vue'

let history = createWebHistory()
let routes = [
  {
    path: '/',
    name: '首頁',
    component: HomePage
  },
  {
    path: '/AboutMe',
    name: '關於我',
    component: AboutMe
  },
  {
    path: '/Slashie',
    name: '斜槓人生',
    component: SlashiePage
  },
  {
    path: '/SampleComposes/Alerts',
    name: '提示框',
    component: AlertsPages
  },
]

export default createRouter({ history, routes })