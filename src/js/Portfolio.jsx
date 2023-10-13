import React from 'react';
import Project from './Project';
import Card from 'react-bootstrap/Card';
import MinneGrowtaImage from '../background-img.jpg';
import KonsoomImage from '../konsoom.jpg';
import BookshelfImage from '../book-icon.png';

function Portfolio() {
  const projects = [
    {
      title: 'MinneGrowta',
      image: MinneGrowtaImage,
      deployedLink: 'https://minnegrowta-66ed74e127f3.herokuapp.com/',
      githubLink: 'https://github.com/laurbaur024/garden-planner',
    },
    {
      title: 'Konsoom',
      image: KonsoomImage,
      deployedLink: 'https://johntg96.github.io/konsoom/',
      githubLink: 'https://github.com/johntg96/konsoom',
    },
    {
      title: 'Bookshelf',
      image: BookshelfImage,
      deployedLink: 'https://dmtweedy-bookshelf-06533d4bddb5.herokuapp.com/',
      githubLink: 'https://github.com/dmtweedy/bookshelf',
    },
  ];

  return (
    <section className="portfolio content">
      <h2>My Projects</h2>
      <div className="project-list">
      <div className="project-grid">
        {projects.map((project, index) => (
          <Card key={index} className={index === 0 ? "big-project" : "small-project"}>
            <Card.Body>
              <Project
                title={project.title}
                image={project.image}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
