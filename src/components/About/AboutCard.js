import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, Soy <span className="purple">Samuel Quispe Flores </span>
            de <span className="purple"> Potosí, Bolivia.</span>
            <br />Soy un estudiante de septimo semestre que cursa materia de Seminario de Sistemas
            de la Carrera de Ingenieria de Sistemas. 
            <br />
            <br />
            Aparte de la codificacion, algunas otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar video juegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir blogs de tecnologias
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseños
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SamQuis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
