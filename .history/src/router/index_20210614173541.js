import { createRouter, createWebHistory } from "vue-router";

const Home = () =>
    import ("./views/Home.vue");

import About from "@/views/About.vue";
import Employee from "@/views/Employee.vue";
import Programmes from "@/views/Programmes.vue";
import ProgramPage from "@/views/ProgramPage.vue";
import Reports from "@/views/Reports.vue";
import Events from "@/views/Events.vue";
import Resources from "@/views/Resources.vue";
import News from "@/views/News.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/en/about-diku",
        name: "About",
        component: About,
    },
    {
        path: "/en/about-diku/employees",
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
    {
        path: "/en/news",
        name: "News",
        component: News,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;