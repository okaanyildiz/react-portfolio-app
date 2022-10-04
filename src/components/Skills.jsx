import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import csharp from "../assets/img/langs/csharp.svg"
import python from "../assets/img/langs/python.svg"
import typescript from "../assets/img/langs/typescript.svg"
import react from "../assets/img/langs/react.svg"
import django from "../assets/img/langs/django.svg"
import dotnet from "../assets/img/langs/dotnet.svg"
import nodejs from "../assets/img/langs/nodejs.svg"
import mongodb from "../assets/img/langs/mongodb.svg"
import postgresql from "../assets/img/langs/postgresql.svg"
import docker from "../assets/img/langs/docker.svg"
import kubernetes from "../assets/img/langs/kubernetes.svg"
import aws from "../assets/img/langs/aws.svg"


function Skills() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="skillmeter" />
                                    <h5>Frontend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skillmeter" />
                                    <h5>Backend Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skillmeter" />
                                    <h5>Cloud Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skillmeter" />
                                    <h5>CI/CD</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="skillmeter" />
                                    <h5>Agile Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="skillmeter" />
                                    <h5>DevOps</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="skillmeter" />
                                    <h5>Microservices</h5>
                                </div>
                            </Carousel>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider lang-slider">
                                <div className="item">
                                    <img src={csharp} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={python} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={react} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={django} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={dotnet} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={postgresql} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={docker} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={kubernetes} alt="skillmeter" />
                                </div>
                                <div className="item">
                                    <img src={aws} alt="skillmeter" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills