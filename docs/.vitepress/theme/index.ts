import MataritoVue from 'matarito-vue'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import './demo-container.css'
import './general.css'
export default {
   ...DefaultTheme,
   enhanceApp({ app }) {
     app.use(MataritoVue)
     app.component('DemoContainer', DemoContainer)
     vitepressBackToTop({
      threshold:300
    })
   }
 }