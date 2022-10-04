import linkedin from '../assets/img/nav-icon-linkedin.svg';
import email from "../assets/img/nav-icon-email.svg"

function Footer() {
    return (
        <footer className="footer" id="footer">
            <h1>Let's Get in Touch!</h1>
            <div className="connect-icon-box">
                <a href="https://www.linkedin.com/in/oguzkaanyildiz/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="mailto:okaanyildiz@yahoo.com">
                    <img src={email} alt="email" />
                </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
        </footer >
    )
}

export default Footer