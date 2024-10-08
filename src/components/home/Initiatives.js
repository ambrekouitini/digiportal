import React, { useState, useEffect } from 'react';
import '../../styles/home/initiatives.scss';

// Importation des images
import digiDaysImg from '../../assets/images/digi-days.png';
import digiNewsImg from '../../assets/images/digi-news.png';
import digiTrainingsImg from '../../assets/images/digi-trainings.png';
import digiLunchImg from '../../assets/images/digi-lunch.png';

const Initiatives = () => {
    const [initiatives] = useState([
        {
            title: "Digi days",
            description: "Plongez dans l'univers du digital avec nos DigiDays : des webinaires ciblés qui dévoilent les guidelines incontournables et les stratégies de pointe pour naviguer dans le numérique. Nous y déballons un arsenal d'outils digitaux, de Matomo à Figma en passant par Viméo et Axeptio, tous conçus pour booster votre productivité et créativité. Ces sessions sont des carrefours d'échange sur les innovations récentes et vos besoins actuels.",
            image: digiDaysImg,
            link: "#",
            number: "01"
        },
        {
            title: "Digi News",
            description: "Restez à la pointe de l'actualité digitale avec nos DigiNews : un flux continu d'informations pertinentes sur les dernières tendances, technologies et stratégies du monde numérique. Nous filtrons et analysons les nouvelles les plus importantes pour vous offrir un condensé d'insights précieux, vous permettant de rester informé et compétitif dans un paysage digital en constante évolution.",
            image: digiNewsImg,
            link: "#",
            number: "02"
        },
        {
            title: "Digi trainings",
            description: "Développez vos compétences numériques avec nos DigiTrainings : des sessions de formation pratiques et interactives conçues pour vous doter des compétences essentielles dans le domaine digital. De la maîtrise des outils de base aux techniques avancées, nos formations couvrent un large éventail de sujets, vous permettant d'améliorer votre efficacité et votre créativité dans l'environnement numérique.",
            image: digiTrainingsImg,
            link: "#",
            number: "03"
        },
        {
            title: "Digi lunch",
            description: "Rejoignez-nous pour nos DigiLunch : des sessions informelles et conviviales où nous discutons des dernières innovations digitales autour d'un repas. C'est l'occasion parfaite de networker, d'échanger des idées et de découvrir de nouvelles perspectives dans une ambiance décontractée. Ces rencontres favorisent la collaboration et l'apprentissage mutuel, tout en restant à jour sur les tendances du secteur.",
            image: digiLunchImg,
            link: "#",
            number: "04"
        }
    ]);

    const [selectedInitiative, setSelectedInitiative] = useState(null);
    const [hoveredInitiative, setHoveredInitiative] = useState(null);
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        if (selectedInitiative) {
            setTimeout(() => setImageVisible(true), 300);
        } else {
            setImageVisible(false);
        }
    }, [selectedInitiative]);

    const handleInitiativeClick = (initiative, index) => {
        setSelectedInitiative({ ...initiative, index });
    };

    const handleClose = () => {
        setSelectedInitiative(null);
    };

    const handleMouseEnter = (initiative) => {
        setHoveredInitiative(initiative);
    };

    const handleMouseLeave = () => {
        setHoveredInitiative(null);
    };

    const getPositionClass = (index) => {
        if (index === 0) return 'top';
        if (index === initiatives.length - 1) return 'bottom';
        return 'middle';
    };

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
                    <img 
                        src={hoveredInitiative ? hoveredInitiative.image : (selectedInitiative ? selectedInitiative.image : initiatives[0].image)} 
                        alt={hoveredInitiative ? hoveredInitiative.title : (selectedInitiative ? selectedInitiative.title : initiatives[0].title)} 
                        className={imageVisible ? 'visible' : ''}
                    />
                </div>
                <div className="containerRight">
                    {selectedInitiative ? (
                        <div className={`singleCard expanded active ${getPositionClass(selectedInitiative.index)}`}>
                            <div className="cardHeader">
                                <h3>{selectedInitiative.title}</h3>
                                <button onClick={handleClose}></button>
                            </div>
                            <p>{selectedInitiative.description}</p>
                        </div>
                    ) : (
                        initiatives.map((initiative, index) => (
                            <div 
                                key={index} 
                                className={`singleCard ${getPositionClass(index)}`}
                                onClick={() => handleInitiativeClick(initiative, index)}
                                onMouseEnter={() => handleMouseEnter(initiative)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="cardContent">
                                    <h3>{initiative.title}</h3>
                                    <div className="numberContainer">
                                        <span className="number">{initiative.number}</span>
                                        <div className="plusButton"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Initiatives;