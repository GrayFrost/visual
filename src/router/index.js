import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Pokemon from '../views/Pokemon.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/pokemon', component: Pokemon},
  {path: '/test', component: () => import('../views/pk/index.vue')}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;