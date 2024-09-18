import React from 'react';
import ScrollProvider from '../../components/home/ScrollProvider';
import IntroSection from '../../components/use/introSection';
import '../../styles/projects/beauterra.scss';
import beauterraHeaderImg from '../../assets/images/projects/beauterraHeader.png';
import puceSvg from '../../assets/images/projects/puce.svg';
import objectif1Img from '../../assets/images/projects/objectif1.png';
import objectif2Img from '../../assets/images/projects/objectif2.png';
import section4Img from '../../assets/images/projects/section4.png';

const Beauterra = () => {

    const projectInfo = {
        title: 'Beauterra',
        subtitle: 'Refonte de l\'espace privé',
        description : 'Le site Beauterra, élaboré avec Figma, offre un espace pharmacie fonctionnel et esthétique. Il propose un suivi sécurisé des commandes et un historique détaillé pour les utilisateurs. Un back-office permet également à l\'équipe Beauterra de gérer le site en toute autonomie.' ,
        year: '2023',
        duration: '1 mois',
        service: 'Website',
        status: 'En production',
        image: beauterraHeaderImg
    };

    return (
        <section className="projectPage">
            <ScrollProvider />
            <IntroSection {...projectInfo} />

            <div className="secondSection">
                <div className='objectifsContainer'>
                    <h2>Les Objectifs</h2>
                    <div className='objectif'>
                        <img src={puceSvg} alt='puce' />
                        <p>Conception fonctionnelle et graphique de l'espace
                        pharmacie réalisée grâce à l’outil Figma.</p>
                    </div>
                    <div className='objectif'>
                        <img src={puceSvg} alt='puce' />
                        <p>Développement de l'espace privé pour sécuriser les commandes, permettant aux pharmacies de consulter facilement l'historique et l'état des commandes, et faciliter le contact avec Beauterra sur les commandes en cours.</p>
                    </div>
                    <div className='objectif'>
                        <img src={puceSvg} alt='puce' />
                        <p>Développement d'un back-office pour permettre à l'équipe Beauterra de gérer le site de manière plus autonome.</p>
                    </div>
                </div>
                <div className='fonctionnalityContainer'>
                    <div className='fonctionnalityInfo'>
                        <img src={objectif1Img} alt='objectif1' />
                        <div className='fonctionnalityText'>
                            <h4>fonctionnalités</h4>
                            <p>Back-office personnalisé avec la possibilité d’ajouter des articles sur le site et de les modifier simplement</p>
                            <p>Gestion des commandes en temps réel depuis le back-office</p>
                            <p>Conception fonctionnelle</p>
                        </div>
                    </div>
                    <div className='fonctionnalityImg'>
                        <img src={objectif2Img} alt='objectif2' />
                    </div>
                </div>
            </div>

            <div className="thirdSection">
                <p>Le projet Beauterra a débuté avec la création d'un espace pharmacie, conçu avec Figma pour optimiser le design. Nous avons ensuite introduit un espace privé sécurisé, améliorant la gestion des commandes et la communication avec Beauterra. Enfin, un back-office a été développé, renforçant l'autonomie de notre équipe dans la gestion du site.</p>
            </div>

            <div className="fourthSection">
                <img src={section4Img} alt='section4' />
            </div>

            <div className="fifthSection">
                <div className='resultsContainer'>
                    <h2>Résultats du projet</h2>
                    <div className='result'>
                        <p>Conception fonctionnelle et graphique de l'espace
                        pharmacie réalisée grâce à l’outil Figma.</p>
                        <p>Développement de l'espace privé pour sécuriser les commandes, permettant aux pharmacies de consulter facilement l'historique et l'état des commandes, et faciliter le contact avec Beauterra sur les commandes en cours.</p>
                        <p>Développement d'un back-office pour permettre à l'équipe Beauterra de gérer le site de manière plus autonome.</p>
                    </div>
                </div>

                <button className="button"></button>
            </div>


        </section>
    );
};

export default Beauterra;
