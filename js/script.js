const { createApp, ref } = Vue;

import Header from "../vue/Header.js";
import Footer from "../vue/Footer.js";
import Skills from "../vue/Skills.js";
import Projects from "../vue/Projects.js";

let app = createApp({
});

app.component('component-header', Header);
app.component('component-footer', Footer);
app.component('component-skills', Skills);
app.component('component-projects', Projects);

app.mount('#app')