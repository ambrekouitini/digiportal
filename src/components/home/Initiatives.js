import { useState } from 'react';
import '../../styles/home/initiatives.scss';

// Importation des images
import digiDaysImg from '../../assets/images/digi-days.png';
import digiNewsImg from '../../assets/images/digi-news.png';
import digiTrainingsImg from '../../assets/images/digi-trainings.png';
import digiLunchImg from '../../assets/images/digi-lunch.png';

const Initiatives = () => {

    const [containerRef, setRef] = useState([
    {
        title: "Digi days",
        description: "Plongez dans l'univers du digital avec nos DigiDays : des webinaires ciblés qui dévoilent les guidelines incontournables et les stratégies de pointe pour naviguer dans le numérique. Nous y déballons un arsenal d'outils digitaux, de Matomo à Figma en passant par Viméo et Axeptio, tous conçus pour booster votre productivité et créativité. Ces sessions sont des carrefours d'échange sur les innovations récentes et vos besoins actuels.",
        image : digiDaysImg,
        link: "#",
        number: "01"
    },
    {
        title : "Digi News",
        description : "Plongez dans l'univers du digital avec nos DigiDays : des webinaires ciblés qui dévoilent les guidelines incontournables et les stratégies de pointe pour naviguer dans le numérique. Nous y déballons un arsenal d'outils digitaux, de Matomo à Figma en passant par Viméo et Axeptio, tous conçus pour booster votre productivité et créativité. Ces sessions sont des carrefours d'échange sur les innovations récentes et vos besoins actuels.",
        image : digiNewsImg,
        link: "#",
        number: "02"
    },
    {
        title : "Digi trainings",
        description : "Plongez dans l'univers du digital avec nos DigiDays : des webinaires ciblés qui dévoilent les guidelines incontournables et les stratégies de pointe pour naviguer dans le numérique. Nous y déballons un arsenal d'outils digitaux, de Matomo à Figma en passant par Viméo et Axeptio, tous conçus pour booster votre productivité et créativité. Ces sessions sont des carrefours d'échange sur les innovations récentes et vos besoins actuels.",
        image : digiTrainingsImg,
        link: "#",
        number: "03"
    },
    {
        title : "Digi lunch",
        description : "Plongez dans l'univers du digital avec nos DigiDays : des webinaires ciblés qui dévoilent les guidelines incontournables et les stratégies de pointe pour naviguer dans le numérique. Nous y déballons un arsenal d'outils digitaux, de Matomo à Figma en passant par Viméo et Axeptio, tous conçus pour booster votre productivité et créativité. Ces sessions sont des carrefours d'échange sur les innovations récentes et vos besoins actuels.",
        image : digiLunchImg,
        link: "#",
        number: "04"
    }
    ]);

return (
    <section className="initiatives">
        <div className="initiativesText">
            <div className="titleDiv">
                <h2>Nos initiatives</h2>
                <div className="button"></div>
            </div>
        </div>
        <div className="initiativesContent">
            <div className="containerLeft">
                {containerRef.map((item, index) => (
                    <div key={index} className="singleCard">
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </div>
            <div className="containerRight">
                <div className="singleCard">
                    <h3>{containerRef[0].title}</h3>
                    <span>{containerRef[0].number}</span>
                </div>
            </div>
        </div>
        <a href="#"></a>
    </section>
  );
};

export default Initiatives;