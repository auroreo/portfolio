export default {
     template: `
    <nav>
        <a href="#home" id="portfolio-logo">
            <img src="./img/home/logo-2.svg" alt="Logo"></
        </a>
        <ul>
            <li v-for="section in sections">
                <a :href="section.path" @click="displaySection">{{section.title}}</a>
            </li>
        </ul>
    </nav>
    `,
    props: ['slug', 'title'],
    methods: {
        // keepHover(e) {
        //     console.log('success');
        //     let old = document.querySelector('li a .active');
        //     old.classList.remove('active');
        //     e.target.classList.add('active')
        // }
        displaySection() {
    
        }
    },
    data() {
        return {
            sections: [
                {
                    title: 'PRÉSENTATION',
                    path: '#about'
                },
                {
                    title: 'PARCOURS',
                    path: '#experience'
                },
                {
                    title: 'COMPÉTENCES',
                    path: '#skills'
                },
                {
                    title: 'PROJETS',
                    path: '#projects'
                }
            ]
        }
    },
}