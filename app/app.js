import Vue from 'nativescript-vue'
import routes from './routes'
import Home from './components/Home'

Vue.mixin({
  methods: {
  $goTo: function (params) {
    this.$navigateTo(routes[params.name].component, {
      transition: {
        name: params.back ? "slideRight" : "slideLeft",
      },
      clearHistory: params.clearHistory === true
    });
  }
}
})

new Vue({
  render: h => h('frame', [h(Home)]),
}).$start()
