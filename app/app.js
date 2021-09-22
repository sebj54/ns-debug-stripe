import Vue from 'nativescript-vue'

import Home from './components/Home'

import CreditCardView from '@triniwiz/nativescript-stripe/vue'

Vue.use(CreditCardView)

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
