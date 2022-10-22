import "./ResumeSkills.css";

const ResumeSkills = ({ content }) => {
    const SkillShow = function ({ values }) {
        return (
            <div style={{ color: "var(--green)", backgroundColor: "#010130", padding: "0.8rem 1.6rem", borderRadius: "2rem" }}>{values}</div>
        )
    }
    return (
        <div style={{ padding: "1rem", border: "dotted var(--slate)", borderRadius: "1rem" }}>
            <div style={{ textAlign: "center" }} className="title--small">{content.head}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                {content.body.map((val, ind) => <SkillShow values={val} key={ind} />)}
            </div>

        </div>
    )
}

export default ResumeSkills;