import ResumeCard from "./ResumeCard";
import ResumeSkills from "./ResumeSkills";



const Resume = () => {
    const resumeObjs = [
        {
            iconName: "book-outline",
            heading: "Education",
            details: [
                {
                    institute: "Jaypee Institute of Information Technology,Noida",
                    extra: "B.Tech - ECE",
                    duration: "2019-2023",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                },
                {
                    institute: "Modern School,Noida",
                    extra: "Higher Secondary",
                    duration: "2017-2018",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                },
                {
                    institute: "Modern School , Noida",
                    extra: "Secondary",
                    duration: "2015-2016",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                }
            ]
        },
        {
            iconName: "construct-outline",
            heading: "Internship",
            details: [
                {
                    institute: "Thales, India",
                    extra: "Software Engineering Intern",
                    duration: "Feb 2023 - July 2023",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                },
                {
                    institute: "Aura Electronics",
                    extra: "Web Developer Intern",
                    duration: "June 2022 - July 2022",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                },
                {
                    institute: "Ezix Infrastructure Pvt Ltd",
                    extra: "Operations Intern",
                    duration: "Jan 2022 - March 2022",
                    about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos omnis eos cupiditate accusamus excepturi, est ipsa consequuntur quo sunt. Quas, cupiditate accusantium!"
                }
            ]
        }
    ]
    const skillsObj = [
        {
            head: "Prog. Languages",
            body: ["Javascript", "C++", "HTML5", "CSS3"]
        },
        {
            head: "Web Technologies",
            body: ["ReactJS", "NodeJS", "ExpressJS"]
        },
        {
            head: "Databases",
            body: ["SQL", "MongoDB"]
        },
        {
            head: "Miscellaneous",
            body: ["DSA", "Git/Github", "Windows-OS"]
        },
        {
            head: "Soft Skills",
            body: ["Problem Solving", "Communication", "Teamwork", "Adaptability"]
        },
        {
            head: "Fluent Languages",
            body: ["English", "Hindi"]
        }
    ]
    return (
        <div className="Resume">
            <div>
                <span className="about-me--heading">Resume</span>
                <div className="underline"></div>
                <p className="about-me--generalInfo">
                    Ohh! Hi again, I see you have stumbled upon my resume. This brief resume contains majorly my education and experience.For complete resume, please view/download the same using the button given below.
                    <br />
                    PS: Its a safe link, well I atleast hope so, but for your safety I would rather suggest you to just take a look at the preview of the same. (´。＿。｀)
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyItems: "flex-end" }}>
                    <a href="https://drive.google.com/file/d/1rvC78ng3jArGrkC7BnODRugL4zp2Qfyc/view?usp=sharing" style={{ backgroundColor: "var(--navy)", padding: "1rem 2rem", textDecoration: "none", color: "var(--green)", borderRadius: "1rem", marginLeft: "auto", marginRight: "0" }} target="_blank" rel="noopener noreferrer">Preview</a>
                </div>
            </div>
            <div className="grid grid--1-col">
                {resumeObjs.map((i, ind) => <ResumeCard intel={i} key={ind} />)}
                <div className="resumeCard">
                    <div className="projectCart--info--head">
                        <ion-icon name="library-outline"></ion-icon>
                        <span className="doing-main--what">Skills - Technical & Soft</span>
                    </div>
                    <div className="grid grid--3-col">
                        {skillsObj.map((obj, ind) => <ResumeSkills content={obj} key={ind} />)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Resume;