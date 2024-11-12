import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import abc from "../../Assets/Projects/abc-e.vercel.app.png";
import bacan from "../../Assets/Projects/bacan.vercel.app.png";
import fashions from "../../Assets/Projects/fashions-zeta.vercel.app.png";
import anas from "../../Assets/Projects/as-anas.vercel.app.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={abc}
              isBlog={false}
              title="ABC-E"
              description="Website built with HTML5, SCSS, and JavaScript."
              ghLink="https://github.com/RIOS-JORGE/ABC-E"
              demoLink="http://abc-e.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bacan}
              isBlog={false}
              title="Bacan Barbershop"
              description="Website built with HTML5,Css3"
              ghLink="https://github.com/RIOS-JORGE/Bacan"
              demoLink="https://bacan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashions}
              isBlog={false}
              title="Fashions"
              description="This is a React project created during Coderhouse's React.js course. The app uses Vite as a bundler and Tailwind CSS for styling."
              ghLink="https://github.com/RIOS-JORGE/Fashions"
              demoLink="https://fashions-zeta.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anas}
              isBlog={false}
              title="As-Anas"
              description="Website made as a freelancer, used technologies, Next.js, Typescript, Tailwind CSS."
              ghLink="https://github.com/nescheytt/as-anas"
              demoLink="https://as-anas.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
