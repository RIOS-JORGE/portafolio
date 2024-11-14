import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abc from "../../Assets/Projects/abc-e.vercel.app.png";
import bacan from "../../Assets/Projects/bacan.vercel.app.png";
import fashions from "../../Assets/Projects/fashions-zeta.vercel.app.png";
import anas from "../../Assets/Projects/as-anas.vercel.app.png";

const proyectos = [
  {
    imgPath: abc,
    isBlog: false,
    title: "ABC-E",
    description: "Website built with HTML5, SCSS, and JavaScript.",
    ghLink: "https://github.com/RIOS-JORGE/ABC-E",
    demoLink: "http://abc-e.vercel.app",
  },
  {
    imgPath: bacan,
    isBlog: false,
    title: "Bacan Barbershop",
    description: "Website built with HTML5,Css3",
    ghLink: "https://github.com/RIOS-JORGE/Bacan",
    demoLink: "https://bacan.vercel.app/",
  },
  {
    imgPath: fashions,
    isBlog: false,
    title: "Fashions",
    description: "Website built with HTML5,Css3",
    ghLink: "https://github.com/RIOS-JORGE/Fashions",
    demoLink: "https://fashions-zeta.vercel.app/",
  },
  {
    imgPath: anas,
    isBlog: false,
    title: "As Anas",
    description: "Website built with HTML5,Css3",
    ghLink: "https://github.com/RIOS-JORGE/As-Anas",
    demoLink: "https://as-anas.vercel.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {proyectos.map((project) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
