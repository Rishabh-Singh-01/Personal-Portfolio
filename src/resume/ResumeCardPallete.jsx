import "./ResumeCardPallete.css";

const ResumeCardPallete = ({ body }) => {
    return (
        <div className="resumeCardPallete">
            <div className="serialNumberStyler">
                <div className="styler-circle"></div>
                <div className="styler-line"></div>
            </div>
            <div className="resumeCardPallete--info">
                <h3 className="resumeCardPallete--info--title">{body.institute}</h3>
                <h4>{body.extra}</h4>
                <span>{body.duration}</span>
                <p>{body.about}</p>
            </div>
        </div>
    )
}

export default ResumeCardPallete;