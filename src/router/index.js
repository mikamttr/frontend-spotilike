import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/albums', name: 'albums', component: () => import('../views/AlbumsView.vue') },
    { path: '/artists', name: 'artists', component: () => import('../views/ArtistsView.vue') },
    { path: '/genres', name: 'genres', component: () => import('../views/GenresView.vue'), },
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), },
    { path: '/signup', name: 'signup', component: () => import('../views/SignUpView.vue'), },
  ],
})

export default router
