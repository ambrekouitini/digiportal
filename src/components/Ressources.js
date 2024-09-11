import { useState } from 'react';
import '../styles/ressources.scss';

const Ressources = () => {

    const [containerRef, setRef] = useState([
        {title: "Livre blanc digital",link: "#"},{title: "Charte graphique",link: "#"},{title: "Design system",link: "#"}
    ]);

return (
    <section className="ressources">
        <div className="ressourcesText">
            <div className="titleDiv">
                <h2>Les ressources</h2>
                <div className="button"></div>
            </div>
            <p>Accédez à des ressources essentielles pour vos projets digitaux et restez informé.e des dernières innovations dans le domaine digital</p>
        </div>
        <div className="ressourcesContent">
            <div className="container">
                {containerRef.map((item, index) => {
                    return (
                        <a href={item.link} key={index}>
                            <h3>{item.title}</h3>
                            <span>Découvrir</span>
                        </a>
                    );
                })}
            </div>
        </div>
        <a href="#"></a>
    </section>
  );
};

export default Ressources;