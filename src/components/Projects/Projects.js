import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/srwelquis.png";
import chatify from "../../Assets/Projects/library.png";
import bitsOfCode from "../../Assets/Projects/portaloly.png";

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
              imgPath={chatify}
              isBlog={false}
              title="System library"
              description="Sistema para una biblioteca para llevar el control y la administracion de los libros, prestamos y devuluciones, esta creado con java, MySql y tiene funciones que permite al usuario reservar libro."
              ghLink="https://github.com/samquis/System-library"
              demoLink="https://github.com/samquis/System-library"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portaforio HTML,CSS,JavaScript"
              description="La pagina de mi portafolio que esta hecho con HTML, CSS, JavaScript que contiene la informacion de mi persona acerca de mis habilidades, pagina tiene animaciones para interactuar."
              ghLink="https://github.com/samquis/portafolyWeb"
              demoLink="https://github.com/samquis/portafolyWeb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Sitio web de una constructora SRWelquis. esta desarrollado con las tecnologias HTML, CSS, Nodejs, Express, utilizando como base de datos MongoDB para añmacenar informaciones que interactuan los cientes para solicitar algun consultas, cotizaciones sobre la contruccion."
              ghLink="https://github.com/samquis"
              demoLink="https://github.com/samquis"              
            />
          </Col>


    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
