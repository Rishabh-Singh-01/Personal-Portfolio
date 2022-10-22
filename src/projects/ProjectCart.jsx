import { useState } from "react";
import "./ProjectCart.css";


const ProjectCart = ({ title, about, techUsed, picture }) => {
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
                    <img className={`projectCart--info--img ${hovering}`} src={require(`./../imgs/${picture}.webp`)} alt="picture from the projects cart" />
                    <a className={`${display}`} href="#">
                        <ion-icon name="open-outline"></ion-icon>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCart;