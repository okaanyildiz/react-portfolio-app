import profilImg from "../assets/img/profil-img.jpg";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

function Banner() {

    return (
        <Router>
            <section className="banner" id="home">
                <div className="banner-container">
                    <div className="banner-left-column">
                        <div>
                            <span className="tagline">Welcome!</span>
                        </div>
                        <div>
                            <h1>I'm Oguz</h1>
                            <h2>Software Developer</h2>
                            <p>With years of experience, passionate about developing and collaborating. Always eager to learn new technologies.</p>
                            <div classname="banner-btn-container">
                                <HashLink to='#skills'>
                                    <button>Discover my skills</button>
                                </HashLink>
                                <HashLink to='#footer'>
                                    <button className="banner-connect-btn">Let's Connect</button>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right-column">
                        <img src={profilImg} alt="oguz yildiz" />
                    </div>
                </div>
            </section>
        </Router>
    )
}

export default Banner