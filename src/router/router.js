import Vue from 'vue';
import VueRouter from 'vue-router';
import AnimeEdit from './components/AnimeEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/edit',
    component: AnimeEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

