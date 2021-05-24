import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Tag, Select, Option } from 'element-ui'
import select_input from './components/select_input'

Vue.use(Button)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Option)

Vue.component('baSelectInput' ,select_input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
