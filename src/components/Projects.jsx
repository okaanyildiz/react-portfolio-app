import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/img/project1.webp";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.webp";
import project5 from "../assets/img/project5.webp";
import project6 from "../assets/img/project6.png";
import project7 from "../assets/img/project7.png";
import project8 from "../assets/img/project8.png";

function Projects() {

    const projects1 = [

        {
            title: "E-Commerce App",
            description: "With Django, React, Bootstrap, PostgreSQL, AWS",
            imgUrl: project2,
        },
        {
            title: "Real Estate App",
            description: "With Django, Bootstrap, PostgreSQL",
            imgUrl: project1
        },
        {
            title: "Social Media App",
            description: "With ASP.NET Core, React, Semantic UI",
            imgUrl: project3,
        }
    ];

    const projects2 = [
        {
            title: "Real Time Chat App",
            description: "MERN Stack",
            imgUrl: project4,
        },
        {
            title: "E-Commerce App",
            description: "MERN Stack",
            imgUrl: project5,
        },
        {
            title: "Social Media App",
            description: "MERN Stack",
            imgUrl: project6,
        }
    ];

    const projects3 = [
        {
            title: "Landing Page",
            description: "React, Tailwind",
            imgUrl: project7,
        },
        {
            title: "Admin Dashboard",
            description: "React, Syncfusion",
            imgUrl: project8,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="animate__animated animate__fadeIn">
                            <h2>Projects</h2>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">3</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects1.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                projects2.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {
                                                projects3.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects