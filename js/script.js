const { createApp, ref } = Vue;

import Header from "../vue/Header.js";
import Footer from "../vue/Footer.js";
import Home from "../vue/Home.js";
import About from "../vue/About.js";
import Experience from "../vue/Experience.js";
import Skills from "../vue/Skills.js";
import Projects from "../vue/Projects.js";

let app = createApp({
});

app.component('component-header', Header);
app.component('component-footer', Footer);
app.component('component-home', Home);
app.component('component-about', About);
app.component('component-experience', Experience);
app.component('component-skills', Skills);
app.component('component-projects', Projects);

app.mount('#app')