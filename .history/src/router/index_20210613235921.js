import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Employee from "@/views/Employee.vue";
import Programmes from "@/views/Programmes.vue";
import ProgramPage from "@/views/ProgramPage.vue";
import Reports from "@/views/Reports.vue";
import Events from "@/views/Events.vue";
import Resources from "@/views/Resources.vue";

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
        name: "ProgramPage",
        component: ProgramPage,
        props: true,
    },
    {
        path: "/en/reports",
        name: "Reports",
        component: Reports,
    },
    {
        path: "/en/events",
        name: "Events",
        component: Events,
    },
    {
        path: "/en/resources-and-tools",
        name: "Resources",
        component: Resources,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;