const { createApp, ref } = Vue;

import App from "../App.js";
import Header from "../vue/Header.js";
import Footer from "../vue/Footer.js";
import Home from "../vue/Home.js";
import About from "../vue/About.js";
import Experience from "../vue/Experience.js";
import Skills from "../vue/Skills.js";
import Projects from "../vue/Projects.js";

// Router - Navigation
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/experience', component: Experience},
    {path: '/skills', component: Skills},
    {path: '/projects', component: Projects}
]

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
});

createApp(App)
.use(router)
.component('component-header', Header)
.component('component-footer', Footer)
.mount('#app')

