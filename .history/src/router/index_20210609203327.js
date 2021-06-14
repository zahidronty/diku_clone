import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Employee from "@/views/Employee.vue";
import Programmes from "@/views/Programmes.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/en/about-diko",
        name: "About",
        component: About,
    },
    {
        path: "/en/about-diko/employees",
        name: "Employee",
        component: Employee,
    },
    {
        path: "/en/programmes",
        name: "Programmes",
        component: Programmes,
    },
    {
        path: "/en/programmes/:title",
        component: User,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;