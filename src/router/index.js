import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded views
const HomeView      = () => import('@/views/HomeView.vue')
const SolutionsView = () => import('@/views/SolutionsView.vue')
const ResourcesView = () => import('@/views/ResourcesView.vue')
const AboutView     = () => import('@/views/AboutView.vue')
const ContactView   = () => import('@/views/ContactView.vue')
const NotFoundView  = () => import('@/views/NotFoundView.vue') // create if not present

const routes = [
  { path: '/',          name: 'home',      component: HomeView },
  { path: '/solutions', name: 'solutions', component: SolutionsView },
  { path: '/resources', name: 'resources', component: ResourcesView },
  { path: '/about',     name: 'about',     component: AboutView },
  { path: '/contact',   name: 'contact',   component: ContactView },

  // 404 (keep last)
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 70, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
