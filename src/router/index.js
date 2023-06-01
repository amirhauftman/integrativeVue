import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import UpdateAngel from "@/views/UpdateAngel.vue";
import SignupForm from "@/views/SignupForm.vue";
import DeleteAllUsers from '@/views/DeleteAllUsers.vue';
import FindAllUsers from '@/views/FindAllUsers.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/update",
    name: "update",
    component: UpdateAngel,
  },
  {
    path: "/signup",
    name: "SignupForm",
    component: SignupForm,
  },
  {
    path: "/delete",
    name: "DeleteAllUsers",
    component: DeleteAllUsers,
  },
  {
    path: "/findallusers",
    name: "FindAllUsers",
    component: FindAllUsers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
