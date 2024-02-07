Vue.component('nav-bar', {
    template: `<nav>
    <ul>
        <li>
            <a href="./"></a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href=""></a>
        </li>
        <li>
            <a href=""></a>
        </li>
    </ul>
    </nav>`
})

Vue.component('component-footer', {
    template: 
    `<div>
        <a href="mailto:aurore.vernet@lamanu-student.fr">
            <img src="./img/logo-mail.svg" alt="Logo mail">
        </a>
        <a href="https://www.linkedin.com/in/aurore-vernet/" target="_blank">
            <img src="./img/logo-linkedin.svg" alt="Logo LinkedIn">
        </a>
        <a href="https://github.com/auroreo" target="_blank">
            <img src="./img/logo-github.svg" alt="Logo GitHub">
        </a>
        <span>© Aurore Vernet - 2024</span>
    </div>`
})

let portfolio = new Vue({
    el: "footer"
})
