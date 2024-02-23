export default {
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
                    slug: ''
                },
                {
                    title: 'Parcours',
                    slug: ''
                },
                {
                    title: 'Compétences',
                    slug: ''
                },
                {
                    title: 'Projets',
                    slug: ''
                }
            ]
        }
    },
}