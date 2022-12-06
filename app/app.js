import Vue from 'nativescript-vue'
import Navigator from 'nativescript-vue-navigator'
import routes from './routes'
import App from './components/App'


Vue.use(Navigator, { routes })

new Vue({
  render: (h) => h(App),
}).$start()
