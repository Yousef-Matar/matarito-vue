import MataritoVue from 'matarito-vue'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'
import './demo-container.css'
export default {
   ...DefaultTheme,
   enhanceApp({ app }) {
     app.use(MataritoVue)
     app.component('DemoContainer', DemoContainer)
   }
 }