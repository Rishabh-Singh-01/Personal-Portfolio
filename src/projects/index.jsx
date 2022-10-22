import "./index.css";
import projectInformation from "./project-information";
import ProjectCart from "./ProjectCart";

const Projects = () => {
    return (
        <div className="Projects">
            <div className="projects--head">
                <span className="about-me--heading">Projects</span>
                <div className="underline"></div>
                <p className="about-me--generalInfo">
                    Here are some projects that I have done either by myself completely or followed some online tutorial, just to learn something new or to pass some idle time（￣︶￣）↗
                </p>
            </div>
            <div className="grid grid--1-col">
                {projectInformation.map(obj => (
                    <ProjectCart title={obj["title"]} about={obj["about"]} techUsed={obj["techUsed"]} picture={obj["picture"]} key={obj["key"]} />
                ))}

            </div>

        </div>
    )
}

export default Projects;