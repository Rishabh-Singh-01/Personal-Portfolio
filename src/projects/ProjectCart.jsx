import { useState } from "react";
import "./ProjectCart.css";

const ProjectCart = ({ title, about, techUsed, picture, linkUsed }) => {

    const [display, setDisplay] = useState("notDisplayed");
    const [hovering, setHovering] = useState("");
    const showButton = e => {
        setDisplay("displayed");
        setHovering("hovered");
    };

    const hideButton = e => {
        setDisplay("notDisplayed");
        setHovering("");
    };

    return (
        <div className="projectCart">
            <div className="projectCart--info">
                <div className="projectCart--info--head">
                    <ion-icon name="folder-outline"></ion-icon>
                    <span className="doing-main--what">{title}</span>
                </div>
                <p className="about-me--generalInfo">
                    {about}
                </p>
                <ul className="projectCart--info--details">
                    {
                        techUsed.map((tech, ind) => (
                            <li key={ind}>{tech}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="projectCart--info--img-cont">
                <div className="projectCart--info--img-cont--enter" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
                    <img className={`projectCart--info--img ${hovering}`} src={require(`./../imgs/${picture}.webp`)} alt="picture from the projects cart" loading="lazy" />
                    <a className={`${display}`} href={linkUsed} target="_blank" rel="noopener noreferrer">
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ProjectCart;
// <div>
{/* <img src={require(`./../imgs/project-forkify-lazy.webp`)} alt="picture from the projects cart" /> */ }

// </div >