import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const ContactMain = () => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {

        e.preventDefault()
        if (name !== "" && text !== "" && email !== "") {

            emailjs.sendForm(/**/ /**/ ref.current, /**/)
                .then((result) => {
                    console.log(result.text);
                    setSuccess(true);
                    setName("");
                    setText("");
                    setEmail("");
                    setTimeout(function () {
                        setSuccess(null)
                    }, 6000);
                }, (error) => {
                    console.log(error.text);
                    setSuccess(null);
                });
        } else {
            setSuccess(false)
            setTimeout(function () {
                setSuccess(null)
            }, 6000);
        }
    }

    return (
        <div className="contact" id="contact">
            <h2>Contact me</h2>
            <div className="social">
                <a href="https://github.com/sosi166" target="_blank"><FaGithub size={30} style={{ color: "white", margin: "0 1rem 5px 1rem" }} />GitHub</a>
                <a href="https://www.linkedin.com/in/sosihovhannisyan/" target="_blank"><FaLinkedinIn size={30} style={{ color: "teal", margin: "0 1rem 5px 1rem" }} />LinkedIn</a>
                <a href="https://t.me/contact/1682612711:mzISF5u-AhRHgXL5" target="_blank"><FaTelegram size={30} style={{ color: "white", margin: "0 1rem 5px 1rem" }} />Telegram</a>
            </div>

            <form ref={ref} onSubmit={handleSubmit}>
                <div className="inputs">
                    <input
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <textarea
                    placeholder="Write your message..."
                    rows={10}
                    name="message"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="btn" type="submit">Send</button>
            </form>
            <p>{success === false && "Fill all the fields :)"}</p>
            <p>{success && "Your message has been sent. Thank you :)"}</p>
        </div>
    )
}
export default ContactMain;