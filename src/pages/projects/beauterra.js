import React from 'react';
import ScrollProvider from '../../components/home/ScrollProvider';
import IntroSection from '../../components/use/introSection';
import beauterraHeaderImg from '../../assets/images/projects/beauterraHeader.png';

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
        <div>
            <ScrollProvider />
            <IntroSection {...projectInfo} />
        </div>
    );
};

export default Beauterra;
