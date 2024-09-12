import { useState } from 'react';
import '../../styles/home/contributions.scss';

// Import all images
import pilotageImg from '../../assets/images/pilotage.png';
import webImg from '../../assets/images/web.png';
import graphiqueImg from '../../assets/images/graphique.png';
import prestataireImg from '../../assets/images/prestataire.png';
import guidelinesImg from '../../assets/images/guidelines.png';
import hebergementImg from '../../assets/images/hebergement.png';

const Contributions = () => {

    const [containerRef, setRef] = useState([
        {
            title: "Pilotage de projets digitaux",
            description: "Nous vous accompagnons dans le pilotage de vos projets digitaux, en apportant notre expertise qui va au-delà de l’aspect technique, couvrant également tous les autres aspects du digital",
            image : pilotageImg,
        },
        {
            title: "Développement web",
            description: "Nous sommes bien plus que de simples développeurs ! Notre objectif est de développer pour vous des sites web qui sont ‘pixel perfect’, dotés d’animations attrayantes, et conçus pour être facilement gérables au quotidien.",
            image : webImg,
        },
        {
            title: "Conception graphique",
            description: "Nous transformons votre charte graphique en maquettes et prototypes interactifs, donnant vie à votre vision et vos idées. ",
            image : graphiqueImg,
        },
        {
            title: "Choix de prestataire / Technologie",
            description: "Nous vous accompagnons dans le choix des prestataires et des technologies qui respectent l’écosystème digital du groupe, sont les plus adaptés à vos besoins et à votre vision. ",
            image : prestataireImg,
        },
        {
            title: "Communication des guidelines best practices",
            description: "Nous veillons à partager régulièrement les directives et les meilleures pratiques pour assurer une utilisation optimale et cohérente des technologies digitales au sein du groupe. ",
            image : guidelinesImg,
        },
        {
            title: "Hébergement, nom de domaine",
            description: "Nous prenons en charge l’hébergement et le nom de domaine tous les sites web et applications.",
            image : hebergementImg,
        }
    ]);

    return (
        <div className="contributions">
            <div className="container">
                <div className="contributionsText">
                    <div className="titleDiv">
                        <h2>Nos contributions</h2>
                        <button className="button"></button>
                    </div>
                </div>
                {containerRef.map((item, index) => (
                    <div key={index} className="singleCard">
                        <div className="imageWrapper">
                            <img src={item.image} alt={item.title} />
                            <span>{item.title}</span>
                        </div>
                        <div className="hoverContent">
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
                <div className="discoverMore">
                    <a href="#">Découvrir nos missions</a>
                </div>
            </div>
        </div>
    );
};

export default Contributions;