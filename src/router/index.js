import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), },
    { path: '/signup', name: 'signup', component: () => import('../views/SignUpView.vue'), },

    { path: '/albums', name: 'albums', component: () => import('../views/albums/AlbumsView.vue') },
    { path: '/album/:id', name: 'albumDetail', component: () => import('../views/albums/AlbumDetail.vue'), props: true },

    { path: '/artists', name: 'artists', component: () => import('../views/artists/ArtistsView.vue') },
    { path: '/artist/:id', name: 'artistDetail', component: () => import('../views/artists/ArtistDetail.vue'), props: true },

    { path: '/genres', name: 'genres', component: () => import('../views/genres/GenresView.vue'), },
    { path: '/genre/:id', name: 'genreDetail', component: () => import('../views/genres/GenreDetail.vue'), props: true },
  ],
})

export default router
