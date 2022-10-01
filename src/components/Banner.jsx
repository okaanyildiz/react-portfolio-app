import { Container, Row, Col } from "react-bootstrap";
import profilImg from "../assets/img/profil-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

function Banner() {

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome!</span>
                                        {/* <h1>I'm Oguz</h1> */}
                                        <h2>Software Developer</h2>
                                        <p>With years of experience, passionate about developing and collaborating. Always eager to learn new technologies.</p>
                                        <HashLink to='#footer'>
                                            <button onClick={() => console.log('connect')}>Let’s Connect</button>
                                        </HashLink>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={4} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={profilImg} alt="Header Img" />
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}

export default Banner