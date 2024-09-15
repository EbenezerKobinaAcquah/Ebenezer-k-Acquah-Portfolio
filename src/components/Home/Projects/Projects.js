import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";
import leaf from "../../../Assets/Projects/leaf.png";
import emotion from "../../../Assets/Projects/emotion.png";
import editor from "../../../Assets/Projects/codeEditor.png";
import chatify from "../../../Assets/Projects/chatify.png";
import suicide from "../../../Assets/Projects/suicide.png";
import bitsOfCode from "../../../Assets/Projects/blog.png";
import aboakyer from "../../../Assets/Projects/aboakyer.png"
import chrome from "../../../Assets/Projects/chrome-extension.png"
import portfolio from "../../../Assets/Projects/portfolio.png"
import PhotoFolio from "../../../Assets/Projects/photofolio.png"
import recommender from "../../../Assets/Projects/Learningpic.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommender}
              isBlog={false}
              title="Learning Resource Recommender"
              description="Developed an AI-powered application using Beautiful Soup to curate the top 5 free, highly rated online learning resources, benefiting 100+ underprivileged students by reducing course selection time by 70%. Future updates include a reward system where students earn stars for completing courses, redeemable for scholarships toward paid courses. Open to partnerships for expanding scholarship opportunities"
              ghLink="https://github.com/EbenezerKobinaAcquah/AI-Learning-Recommender"
              demoLink="https://learning-resource-recommender.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chrome}
              isBlog={false}
              title="ChatGPT Chrome Extension"
              description="A cahtgpt chrome extension that integrates OpenAI’s API into every text box on the web, allowing you to edit and fine-tune your writing without needing to visit the ChatGPT website. Whether you're drafting tweets, revising emails, fixing code, you can do it seamlessly within the platform. It supports real-time editing directly where you're typing and includes a plugin system, offering additional control to interact with third-party APIs for enhanced functionality."
              ghLink="https://github.com/EbenezerKobinaAcquah/chatgpt-chrome-extension"
              // demoLink="https://github.com/EbenezerKobinaAcquah/chatgpt-chrome-extension"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aboakyer}
              isBlog={false}
              title="Aboakyer-Online"
              description="A comprehensive website designed to augment the Aboakyer festival of the people of Winneba in central Ghana. 
              It provides media updates through videos and pictures of the currents events of the festival for those not currently in Ghana. 
              Integrated hostel and lodge platforms to search for accomodation if you wish to come for the festival."
              ghLink="https://github.com/EbenezerKobinaAcquah/Aboakyer-Online"
              demoLink="https://ebenezerkobinaacquah.github.io/Aboakyer-Online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password Manager"
              description="Developed a robust password management system with JSON-based permanent storage, implementing
AES-256 encryption to ensure data integrity and user privacy.
 Built a time-efficient search engine using HashMaps / dictionaries and an in-built password generator
 Provided auto-fill and used the pyperclip library to automatically copy generated password to clipboard"
              ghLink="https://github.com/EbenezerKobinaAcquah/Password-Project"
              // demoLink="https://github.com/EbenezerKobinaAcquah/Password-Project"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PhotoFolio}
              isBlog={false}
              title="PhotoFolio"
              description="A Photofolio website for showcasing pictures of the natural world and also take pictures of the polluted water bodies in my community. 
              I satirically showcase these photos to lead sustainability activism on social media #PoisonedForGold. I am also happy to capture other people's happy moments."
              ghLink="https://github.com/EbenezerKobinaAcquah/PoisonedForGold"
              demoLink="https://ebenezerkobinaacquah.github.io/PoisonedForGold/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built using HTML, CSS, and JavaScript to showcase my skills, experiences, and projects. The site features project 
              cards with brief descriptions and includes my resume, and skillset. It was designed with React, Tailwind CSS, and Material UI for a visually appealing and responsive layout."
              ghLink="https://github.com/EbenezerKobinaAcquah/Ebenezer-k-Acquah-Portfolio"
              demoLink="https://ebenezer-k-acquah-portfolio.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
