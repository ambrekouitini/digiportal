import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../../styles/about/canvaEquipe.scss';

import brevinImg from '../../assets/images/Brevin.png';
import azedineImg from '../../assets/images/Azedine.png';
import ambreImg from '../../assets/images/Ambre.png';
import anhThaoImg from '../../assets/images/AnhThao.png';

const teamMembers = [
  {
    name: 'Brévin',
    surname: 'Renaud',
    image: brevinImg,
    tags: ['Développeur Full-stack', 'Alternant'],
    description: 'Actuellement en troisième année à l\'IIM, où il étudie un bachelor Chef de projet digital spécialisé dans le développement web, Brévin a intégré Mayoly en mai 2023 en tant que stagiaire et debut Septembre en alternance. Son rôle consiste à superviser le développement de différents sites web (institutionnels, B2B, B2C) ainsi que nos applications NoCode.',
    position: { x: 650, y: 220 }
  },
  {
    name: 'Azedine',
    surname: 'Aichaoui',
    image: azedineImg,
    tags: ['Chef de Projet Digital', 'Responsable du pôle'],
    description: 'Chez Mayoly depuis 15 ans au sein du pôle infrastructure de l\'IT, en tant qu\'ingénieur Systèmes et Réseaux. Azedine est, depuis novembre 2022, à la tête du pôle Digital au sein de la DDSI, sous la direction de Julien RAGEY. Son bagage en gestion de projets digitaux et culture du Web en font un leader qualifié pour diriger et développer ce département.',
    position: { x: 720, y: 260 }
  },
  {
    name: 'Ambre',
    surname: 'Kouitini',
    image: ambreImg,
    tags: ['Développeuse Full-stack', 'Alternante'],
    description: 'Étudiante en 3ème année à l\'IIM en Coding Digital Innovation, Ambre a rejoint Mayoly en octobre 2023 en tant qu\'alternante. Sa mission première : faire évoluer le site intranet. Sa passion pour le codage va au-delà des lignes de code. Spécialisée en Front-End, elle excelle dans l\'UI/UX, le design graphique et la création de maquettes.',
    position: { x: 550, y: 350 }
  },
  {
    name: 'Anh-Thao',
    surname: 'Mai',
    image: anhThaoImg,
    tags: ['Cheffe de Projet', 'Digital / Web'],
    description: 'Après 4 ans d\'expérience en tant que cheffe de projets web en agences, Anh-Thao maîtrise parfaitement la conception web et l\'UX/UI. Elle supervise désormais la gestion des projets digitaux internes, en étroite collaboration avec les différents métiers. Son expertise et son engagement font d\'elle un élément clé pour mener à bien les initiatives numériques de l\'entreprise.',
    position: { x: 620, y: 280 }
  }
];

const TeamMemberCard = ({ name, surname, image, tags, description, zIndex, position }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
    >
      <div ref={nodeRef} className='singleCard' style={{ zIndex, position: 'absolute', left: position.x, top: position.y }}>
        <div className="cardImage">
          <img src={image} alt={`${name} ${surname}`} className="idImg" />
          <span>{name}</span>
          <span>{surname}</span>
        </div>
        <div className="cardTextContainer">
          <div className='TagContainer'>
            {tags.map((tag, index) => (
              <div key={index} className='tag'>{tag}</div>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Draggable>
  );
};

const CanvaEquipe = () => {
  const [zIndexes, setZIndexes] = useState(teamMembers.map((_, index) => index + 1));

  return (
    <section className="canvaEquipe">
      <div className="titleContainer">
        <h2>Notre équipe</h2>
      </div>
      <div className="cardContainer">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            {...member}
            zIndex={zIndexes[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default CanvaEquipe;


