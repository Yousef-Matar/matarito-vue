import MataritoVue from 'matarito-vue'
import "primeicons/primeicons.css"
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import PreviewCard from '../components/PreviewCard.vue'
import './demo-container.css'
import './general.css'
import './preview-card.css'
export default {
   ...DefaultTheme,
   enhanceApp({ app }) {
     app.use(MataritoVue,{ripple:false})
     app.component('DemoContainer', DemoContainer)
     app.component('PreviewCard', PreviewCard)
     vitepressBackToTop({
      threshold:300
    })
   }
 }