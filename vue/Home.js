import projects from "../vue/Projects.js";

export default {
    template:
    `
    <h2>Faut mettre un truc là pck c'est vide</h2>
    <div>
        <article>
            <div>
                <h3 class="title-block">Qui suis-je ?</h3>
                <p>
                Je m'appelle <strong>Aurore Vernet</strong>, j'ai <strong>24 ans</strong>  et je suis en première année de <strong>Bachelor Digital Marketer UI-UX Designer</strong> à La Manu, à Amiens. 
                </p>
                <p>
                    D'<strong>esprit créatif</strong>, j'ai choisi le web design pour mettre en forme mes idées. Mais... ma formation à La Manu m'a fait découvrir le développement et maintenant <strong>c'est en écrivant des lignes de code que je ne vois pas le temps passer</strong> !
                </p>
                <p>
                    Je souhaite me diriger vers une <strong>spécialisation en développement</strong> mais j'aime le combiner avec le design donc mon objectif est la polyvalence !
                </p>
                <span class="pink">
                    <img src="./img/home/icon-heart.svg" alt="Coeur like" class="icon">
                    J'adore : HTML/CSS, JavaScript, VueJS, PHP, MySQL…</span>
            </div>
            <p class="see-more">Pour en savoir plus sur moi, c'est par <a href="#about"><u>ici</u></a> !</p>
        </article>
        <article>
            <div>
                <h3 class="title-block">Mon dernier projet</h3>
                <span class="last-project">
                    <span class="img-container">
                        <img src="img/projects/logo-frenchdoudou.png">
                    </span>
                    <h4>FRENCH DOUDOU</h4>
                    <span><em>février 2024</em></span>
                    <span>Projet individuel de conception d'une boutique e-commerce avec WordPress</span>
                </span>
            </div>
            <p class="see-more">Cliquez <a href="#projects"><u>ici</u></a> pour voir tous mes projets !</p>
        </article>
    </div>
    `
}