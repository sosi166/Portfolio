import React from 'react';
import aboutImg from "../assets/sosi2.png";
import CV from "../assets/Sosi's CV.pdf";
import { FaFileDownload, FaLink } from "react-icons/fa"

const About = () => {

    return (
        <div className="about" id="about">
            <h2>About me</h2>
            <div className="aboutMain">
                <div className="content">
                    <div className="aboutLeft">
                        <img alt="Sosi's photo" src={aboutImg} loading="lazy" />
                    </div>
                    <div className="aboutRight">
                        <h3>Sosi Hovhannisyan</h3>
                        <p>
                            Hello, I'm Sosi from Armenia. I graduated from Yerevan State University with a bachelor's degree Informatics and Applied Mathematics.
                        </p>
                        <p>
                            I am a front-end web developer skilled in HTML5, CSS3, SASS/SCSS, Material UI, Tailwind CSS, Bootstrap 5, JavaScript, Canvas/Animation, Git & GitHub, Gulp, Webpack, TypeScript, React.js, Three.js, Firebase, MobX, Redux-Toolkit, Next.js(basic), Node.js+Express(basic), Databases, Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator.
                        </p>
                        <a href={CV} download="Sosi's CV" className="btn btnShadow">Download CV <FaFileDownload /></a>
                    </div>
                </div>
                <div className="contentBottom">
                    <h3>Certificates</h3>
                    <div className="certificates">
                        <a href="https://www.sololearn.com/certificates/CT-YXVXJVQP" target="_blank">HTML <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-NIJ3C4AW" target="_blank">CSS <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-B69UXQWO" target="_blank">JavaScript <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-BNYNIJYZ" target="_blank">Web Development Fundamentals <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-FE4GFMLI" target="_blank">React + Redux <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-PGPVHYJQ" target="_blank">Coding for Marketers <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-TPEYJTCM" target="_blank">Responsive Web Design <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-DWIKBLEH" target="_blank">Game Development with JS <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CT-3AZ21CRH" target="_blank">jQuery <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CC-JEM4WWUZ" target="_blank">JavaScript Intermediate <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CC-4LOXAXQD" target="_blank">Introduction to SQL <FaLink size={13} /></a>
                        <a href="https://www.sololearn.com/certificates/CC-TZZYANDE" target="_blank">Tech for Everyone <FaLink size={13} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;