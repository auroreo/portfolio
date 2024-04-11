export default {
     template: `
    <nav>
        <RouterLink to="/">
            <img src="./img/home/logo-2.svg" alt="Logo">
        </RouterLink>
        <ul>
            <li>
                <RouterLink to="/about">PRÉSENTATION</RouterLink>
            </li>
            <li>
                <RouterLink to="/experience">PARCOURS</RouterLink>
            </li>
            <li>
                <RouterLink to="/skills">COMPÉTENCES</RouterLink>
            </li>
            <li>
                <RouterLink to="/projects">PROJETS</RouterLink>
            </li>
        </ul>
    </nav>
    `,
    props: ['slug', 'title'],
}