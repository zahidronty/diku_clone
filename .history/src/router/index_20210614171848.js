import { createRouter, createWebHistory } from "vue-router";

const Home = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Home.vue"], () => {
        resolve(require("@/views/Home.vue"));
    });
};
const About = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/About.vue"], () => {
        resolve(require("@/views/About.vue"));
    });
};
const Employee = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Employee.vue"], () => {
        resolve(require("@/views/Employee.vue"));
    });
};
const Programmes = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Programmes.vue"], () => {
        resolve(require("@/views/Programmes.vue"));
    });
};
const ProgramPage = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/ProgramPage.vue"], () => {
        resolve(require("@/views/ProgramPage.vue"));
    });
};
const Reports = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Reports.vue"], () => {
        resolve(require("@/views/Reports.vue"));
    });
};
const Events = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Events.vue"], () => {
        resolve(require("@/views/Events.vue"));
    });
};
const Resources = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/Resources.vue"], () => {
        resolve(require("@/views/Resources.vue"));
    });
};
const News = (resolve) => {
    // require.ensure is Webpack's special syntax for a code-split point.
    require.ensure(["@/views/News.vue"], () => {
        resolve(require("@/views/News.vue"));
    });
};

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