import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AnimeView from "@/views/AnimeCreationView.vue";
import AnimeEdit from "@/components/AnimeEdit.vue";

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/new-anime",
    name: "Anime",
    component: AnimeView,
  },
  {
    path: '/edit',
    component: AnimeEdit,
  },
];

const router = new Router({
  routes,
});

export default router;
