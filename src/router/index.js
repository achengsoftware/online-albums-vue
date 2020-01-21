import Vue from 'vue'
import Router from 'vue-router'
import ImagePreview from '@/components/ImagePreview'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'ImagePreview',
      component: ImagePreview
    }
  ]
})
