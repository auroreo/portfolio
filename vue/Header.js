export default {
     template: `
    <nav>
        <a href="#home" id="title-portfolio">
            <img src="">
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
                    title: 'Présentation',
                    path: '#about'
                },
                {
                    title: 'Parcours',
                    path: '#experience'
                },
                {
                    title: 'Compétences',
                    path: '#skills'
                },
                {
                    title: 'Projets',
                    path: '#projects'
                }
            ]
        }
    },
}