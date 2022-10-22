import "./IntroCart.css";

const IntroCart = ({ icon, heading, body }) => {
    return (
        <div className="intro-cart">
            <div className="intro-cart--icon">
                <ion-icon name={icon}></ion-icon>
            </div>
            <div className="intro-cart--info">
                <span>{heading}</span>
                <div>{body}</div>
            </div>
        </div>
    )
}

export default IntroCart;