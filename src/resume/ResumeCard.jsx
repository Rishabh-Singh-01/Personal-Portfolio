import "./ResumeCard.css";
import ResumeCardPallete from "./ResumeCardPallete";
const ResumeCard = ({ intel }) => {

    return (
        <div className="resumeCard">
            <div className="projectCart--info--head">
                <ion-icon name={intel.iconName}></ion-icon>
                <span className="doing-main--what">{intel.heading}</span>
            </div>
            <div className="resumeCard--body">
                {intel.details.map((obj, ind) => <ResumeCardPallete body={obj} key={ind} />)}
            </div>
        </div>
    )
}

export default ResumeCard;