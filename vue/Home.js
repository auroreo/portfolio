import projects from "../vue/Projects.js";

export default {
    template:
    `
    <h1 class="title">BIENVENUE SUR MON 
        <pre class="coding-style">portfolio</pre>
    </h1>
    <section>
        <article>
            <div>
                <h3 class="title-block">
                    <span class=" title-word title-word-1">Recherche </span> 
                    <span class=" title-word title-word-2">de </span> 
                    <span class=" title-word title-word-3">stage</span>
                </h3>
                <p>
                    Afin de finaliser ma première année de Bachelor en web design, je recherche un stage <strong>de préférence en développement</strong> mais je suis aussi <strong>ouverte pour du design</strong>, ayant une certaine appétence pour la création ! 
                </p>
                <span>Durée : <strong>6 semaines minimum</strong></span>
                <span>Date de début souhaitée : <strong>29 avril 2024</strong></span>
                <p>
                    Que ce soit en design ou en développement, ce stage me permettra de mettre en application ce que j'ai appris depuis le mois de septembre 2023, en exprimant mes idées et en me challengeant encore plus.
                </p>
            </div>
            <p class="see-more">Vous trouverez mes compétences <a href="#skills"><u>ici</u></a> et mes projets réalisés <a href="#projects"><u>par là</u></a> !</p>
        </article>
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
                <span>J'adore : HTML/CSS, JavaScript, PHP</span>
            </div>
            <p class="see-more">Pour en savoir plus sur moi, c'est par <a href="#about"><u>ici</u></a> !</p>
        </article>
        <article>
        <div>
            <h3 class="title-block">Mon dernier projet</h3>
            <span class="img-container">
                <img src="img/projects/logo-frenchdoudou.png">
            </span>
            <h4>FRENCH DOUDOU</h4>
            <span><em>février 2024</em></span>
            <span>Projet individuel de conception d'une boutique e-commerce avec WordPress</span>
        </div>
        <p class="see-more">Cliquez <a href="#projects"><u>ici</u></a> pour voir tous mes projets !</p>
        </article>
    </section>
    `
}