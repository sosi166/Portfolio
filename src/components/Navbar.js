import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import sosi from "../assets/sosi.png"

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
        <div className="nav">
            <a href='#main' onClick={() => setClick(false)}>
                <h1>Sosi's portfolio</h1>
            </a>
            <ul className={click ? "navMenu active":"navMenu" }>
                <li>
                    <a href='#main' onClick={() => setClick(false)}>Home</a>
                </li>
                <li>
                    <a href='#project' onClick={() => setClick(false)}>Project</a>
                </li>
                <li>
                    <a href='#about' onClick={() => setClick(false)}>About</a>
                </li>
                <li>
                    <a href='#contact' onClick={() => setClick(false)}>Contact</a>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick }>
                {click ? (<FaTimes size={20} style={{ color: "white" }} />
                ) : (
                    <FaBars size={20} style={{ color: "white" }} />
                )}
            </div>
        </div>
         <div className="navImg" id="main">
                <div className="contentCenter" id="main">
                    <div className="contentLeft">
                        <p>Hi, I'M SOSI</p>
                        <h1>React Developer</h1>
                        <div>
                            <a href='#project' className="btn">Project</a>
                            <a href='#contact' className="btn btn-light">Contact</a>
                        </div>
                    </div>
                    <div className="contentRight">
                        <img src={sosi } alt="Sosi's photo"/>
                    </div>
                </div>
         </div>
        </>
    )
}
export default Navbar;