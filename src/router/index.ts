import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '@/views/FeedView.vue'
import TagsView from '@/views/TagsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FeedView
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsView
    }
  ]
})

export default router
