import "./AboutMe.css";
import Doing from "./Doing";

const AboutMe = function () {
    return (
        <div className="about-me">
            <span className="about-me--heading">About Me</span>
            <div className="underline"></div>
            <div className="about-me--generalInfo">
                I'm a final year student currently pursuing B.Tech in Electronics and Communication Engineering from Jaypee Institute of Information Technology,Noida.
                <br />
                <br />
                Despite being in Electronics branch, by no means I am slacking in my area of interests. One of the things I greatly enjoy is Web development. Building something that is functional, user-friendly and attractive is something I take proud in as a fresher :p .I also am decent in DSA(well atleast imo hahahaha) and currently doing more work to improve my problem solving skills.
                <br />
                <br />
                As for my future, for now I want to increase my skill set and explore even different things. Tho it may sound absurd, I want to learn (atleast basics of) micro services and also want to dive into machine learning (i know it will take a hell of time considering how vast and different both are).
                <br />
                <br />
                Ohh! Please don't shy away from looking while you are here and feel free me to contact me anytime for anything. Now I will stop rambling about myself since you might be getting bored :(
                <br />
                Peace !!!!!!!!
            </div>
            <Doing />
        </div>
    )
};

export default AboutMe;