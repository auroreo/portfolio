export default {
    template:
    `
    <h2 class="title">COMPÉTENCES TECHNIQUES</h2>
    <section id=legend>
        <div v-for="legend in legends">
            <img :src="legend.path" :alt="legend.alt">
            <span>{{legend.title}}</span>
        </div>
    </section>
    <section id="skills-items">
        <article>
            <h3 class="title">LANGAGES</h3>
            <div>
                <span v-for="language in languages.slice(0,2)">
                <a :href="language.link" target="_blank">
                    <img :src="language.path" :alt="language.alt">
                </a>
            </span>
            </div>
           <div>
                <span v-for="language in languages.slice(2,4)">
                    <a :href="language.link" target="_blank"><
                        <img :src="language.path" :alt="language.alt"
                    </a>
                </span>
            </div>
            <div>
                <span v-for="language in languages.slice(4,6)">
                    <a :href="language.link" target="_blank">
                        <img :src="language.path" :alt="language.alt">
                    </a>
                </span>
            </div>
        </article>
        <article>
            <h3 class="title">OUTILS</h3>
            <div>
                <span v-for="tool in tools.slice(0,4)">
                    <img :src="tool.path" :alt="tool.alt">
                </span>
            </div>
            <div>
                <span v-for="tool in tools.slice(4,8)">
                    <img :src="tool.path" :alt="tool.alt">
                </span>
            </div>
            <div>
            <span v-for="tool in tools.slice(8,9)">
                <img :src="tool.path" :alt="tool.alt" :class="tool.class">
            </span>
        </div>
        </article>
        <article>
            <h3 class="title">FRAMEWORKS</h3>
            <div>
                <span v-for="framework in frameworks">
                    <a :href="framework.link" target="u_blank">
                        <img :src="framework.path" :alt="framework.alt">
                    </a>
                </span>
            </div>
        </article>
    </section>
    <section id="skills-items-2">
        <article>   
            <h3 class="title">BASE DE DONNÉES</h3>
            <div>
                <span v-for="database in databases">
                    <img :src="database.path" :alt="database.alt"
                </span>
            </div>
        </article>
    </section>
    `,
    props: ['path', 'alt', 'title'],
    data() {
        return {
            legends: [
                {
                    path: './img/skills/icon-beginner.svg',
                    alt: 'Icône niveau débutant',
                    title: 'Débutant'
                },
                {
                    path: './img/skills/icon-mid.svg',
                    alt: 'Icône niveau intermédiaire',
                    title: 'Intermédiaire'
                },
                {
                    path: './img/skills/icon-master.svg',
                    alt: 'Icône niveau maîtrise',
                    title: 'Maîtrise'
                },
            ],
            languages: [
                {
                    path: './img/skills/logo-html.svg',
                    alt: 'Logo HTML',
                    link: 'https://auroreo.github.io/projet-bonappetit/'
                },
                {
                    path: './img/skills/logo-css.svg',
                    alt: 'Logo CSS'
                },
                {
                    path: './img/skills/logo-python.svg',
                    alt: 'Logo Python'
                },
                {
                    path: './img/skills/logo-js.svg',
                    alt: 'Logo JS',
                    link: 'https://auroreo.github.io/shifumi_overwatch/'
                },
                {
                    path: './img/skills/logo-php.svg',
                    alt: 'Logo PHP'
                }
            ],
            tools: [
                {
                    path: './img/skills/logo-figma.svg',
                    alt: 'Logo Figma'
                },
                {
                    path: './img/skills/logo-illustrator.svg',
                    alt: 'Logo Illustrator'
                },
                {
                    path: './img/skills/logo-premierepro.svg',
                    alt: 'Logo Premiere Pro'
                },
                {
                    path: './img/skills/logo-vscode.svg',
                    alt: 'Logo VSCode'
                },
                {
                    path: './img/skills/logo-wordpress.svg',
                    alt: 'Logo WordPress'
                },
                {
                    path: './img/skills/logo-photoshop.svg',
                    alt: 'Logo Photoshop'
                },
                {
                    path: './img/skills/logo-indesign.svg',
                    alt: 'Logo inDesign'
                },
                {
                    path: './img/skills/logo-trello.svg',
                    alt: 'Logo Trello'
                },
                {
                    path: './img/skills/logo-phpmyadmin.svg',
                    alt: 'Logo phMyAdmin',
                    class: 'big-logo'
                },
                {
                    path: './img/skills/logo-figma.svg',
                    alt: 'Logo Figma'
                }
            ],
            frameworks: [
                {
                    path: './img/skills/logo-vuejs.svg',
                    alt: 'Logo Vue.js',
                    link: 'https://auroreo.github.io/ranking_of_films/'
                },
                {
                    path: './img/skills/logo-bootstrap.svg',
                    alt: 'Logo Bootstrap',
                },
            ],
            databases: [
                {
                    path: './img/skills/logo-mysql.svg',
                    alt: 'Logo MySQL'
                }
            ]
        }
    }
}