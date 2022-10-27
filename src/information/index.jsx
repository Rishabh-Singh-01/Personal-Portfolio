import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

import "./index.css";
import AboutMe from "./../about-me/AboutMe";
import Projects from "../projects";
import ContactMe from "../contact-me";
import Resume from "../resume";

const Information = () => {
    return (
        <div className="information">
            <Router>
                <nav className="nav-shift ">
                    <ul className="navBar">
                        <li>
                            <NavLink className="navBar--link" end to="/">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink className="navBar--link" end to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink className="navBar--link" end to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink className="navBar--link" end to="/contact">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<ContactMe />} />
                </Routes>
            </Router>
        </div>
    )
}


export default Information;