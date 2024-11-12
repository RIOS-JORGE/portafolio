import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JOrge Rios </span>
            from <span className="purple"> Bs As, Argentina.</span>
            <br />
            I currently work as a freelance web developer.
            <br />
            I completed my training as a React Web Developer at Coder House.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I like to play music
            </li>
            <li className="about-activity">
              <ImPointRight /> I like reading
            </li>
            <li className="about-activity">
              <ImPointRight /> I like to travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jorge Rios</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
