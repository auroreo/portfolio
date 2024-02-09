Vue.component('component-header', {
    template: `
    <nav>
        <a href="./index.html" id="title-portfolio">
            <div>Aurore Vernet</div>
            <div id="subtitle-portfolio">
                <img src="./img/icon-dev.svg"></img>
                <span>Portfolio</span>
                <img src="./img/icon-design.svg"></img>
            </div>
            
        </a>
        <ul>
            <li v-for="item in sections">
                <a :href="item.slug" @click="keepHover">{{item.title}}</a>
            </li>
        </ul>
    </nav>
    `,
    props: ['slug', 'title'],
    methods: {
        keepHover(e) {
            console.log('success');
            let old = document.querySelector('li a .active');
            old.classList.remove('active');
            e.target.classList.add('active')
        }
    },
    data() {
        return {
            sections: [
                {
                    title: 'Présentation',
                    slug: './presentation.html'
                },
                {
                    title: 'Parcours',
                    slug: './parcours.html'
                },
                {
                    title: 'Compétences',
                    slug: './competences.html'
                },
                {
                    title: 'Projets',
                    slug: './projets.html'
                }
            ]
        }
    },
});

Vue.component('component-footer', {
    template: `
    <div>
        <a href="mailto:aurore.vernet@lamanu-student.fr">
            <img src="./img/icon-mail.svg" alt="Logo mail">
        </a>
        <a href="https://www.linkedin.com/in/aurore-vernet/" target="_blank">
            <img src="./img/logo-linkedin.svg" alt="Logo LinkedIn">
        </a>
        <a href="https://github.com/auroreo" target="_blank">
            <img src="./img/logo-github.svg" alt="Logo GitHub">
        </a>
        <span>© Aurore Vernet - 2024</span>
    </div>`
});

let header = new Vue({
    el: "header",
});

let footer = new Vue({
    el: "footer"
});