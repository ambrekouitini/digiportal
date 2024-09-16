import React from 'react';
import '../../styles/use/introSection.scss';

const IntroSection = ({ title, subtitle, description, year, duration, service, status, image }) => {
    return (
        <section className="introSection">
            <div className="informationContainer">
                <button className="buttonBack"></button>
                <div className="mainContainer">
                    <div className="containerLeft">
                        <div className="titleContainer">
                            <h1>{title}</h1>
                            <span>{subtitle}</span>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className="containerRight">
                        <div className="allKeys">
                            <div className="singleKey">
                                <span className='keyName'>Année</span>
                                <span>{year}</span>
                            </div>
                            <div className="singleKey">
                                <span className='keyName'>Durée</span>
                                <span>{duration}</span>
                            </div>
                            <div className="singleKey">
                                <span className='keyName'>Service</span>
                                <span>{service}</span>
                            </div>
                            <div className="singleKey">
                                <span className='keyName'>Statut</span>
                                <span>{status}</span>
                            </div>
                        </div>
                        <button className="button"></button>
                    </div>
                </div>
            </div>
            
            <div className="imageContainer">
                <img src={image} alt={title} />
            </div>
        </section>
    );
};

export default IntroSection;
