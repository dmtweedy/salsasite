import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DamonTweedyImage from '../image0.jpg';
import DamonKittyImage from '../image1.jpg';

function About() {
  return (
    <section id="about" className="about-content">
      <Container>
        <h2 className="text-center">About Me</h2>
        <Row>
          <Col xs={12} md={4}>
          <img src={DamonTweedyImage} alt="Damon Tweedy" className="img-fluid"/>
          </Col>
          <Col className="about-container" xs={12} md={4}>
            <p className="p1">
              Hi, I'm Damon Tweedy, a software developer with a niche for front end design.
              I have a certificate in Full Stack Web Development from the University of Minnesota, and I've been diving into building REACT sites, databases, backends, front ends, and much more.
            </p>
            <p className="p2">
              What excites me most about tech is seeing the new things we can do every day when it comes to video games and entertainment. I'm very eager to learn about new tech and trends within the gamer industry.
              In my free time, I enjoy cooking, playing new/old video games, and spending time with my friends and family.
            </p>
            <p className="p3">
              You can download my resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
            </p>
          </Col>
          <Col xs={12} md={4}>
          <img src={DamonKittyImage} alt="Damon Tweedy" className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
