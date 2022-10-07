import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";

export enum Routes {
  Login = "login",
  Home = "home",
  User = "user",
  Admin = "admin",
}

const routes = [
  {
    path: "/login",
    name: Routes.Login,
    component: LoginView,
  },
  {
    path: "/",
    name: Routes.Home,
    component: HomeView,
  },
  {
    path: "/user",
    name: Routes.User,
    component: UserView,
  },
  {
    path: "/admin",
    name: Routes.Admin,
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
