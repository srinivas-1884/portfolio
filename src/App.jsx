
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import profileImg from "./assets/Srinivas.jpeg";
import resumeFile from "./assets/resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaReact,
  FaDatabase,
  FaBrain,
  FaHtml5,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaRobot,
  FaChartBar,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaChartLine
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

function App() {
  const [showMore,setShowMore] = useState(false);
  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          SC
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href={resumeFile}
          download
          className="primary-btn"
        >
          Download Resume
        </a>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">
<div className="blur-circle blur1"></div>
<div className="blur-circle blur2"></div>
          

           <h1 className="hero-title">
  <span className="white-text">
    Srinivas <span className="blue-text">Chary</span>
  </span>


          </h1>

          <TypeAnimation
  sequence={[
    "Data Science Student",
    1500,
    "ML Enthusiast",
    1500,
    "Frontend Developer",
    1500,
    "AI Explorer",
    1500,
  ]}
  wrapper="h2"
  speed={40}
  repeat={Infinity}
  className="typing-text"
/>

          <p>
            Passionate Data Science student with hands-on experience in
Machine Learning, Artificial Intelligence, Analytics and Full-Stack
Development. I enjoy building intelligent applications, automation
systems and data-driven solutions that solve real-world problems
through technology and innovation.
          </p>

          <div className="hero-buttons">

            <a
               href={resumeFile}
          download
          className="primary-btn"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="secondary-btn"
            >
              View Projects
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/yourprofile"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/thimmapuram-srinivas-chary"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:srinivas1884chary@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <a
  href={profileImg}
  target="_blank"
  rel="noopener noreferrer"
  className="profile-circle"
>

  <img
    src={profileImg}
    alt="Srinivas"
  />

</a>

        </div>

      </section>
<hr></hr>
      {/* ABOUT */}

      <section className="about" id="about">

        

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-card">

          <div className="about-icon">
            <FaBrain />
          </div>

          <div className="about-content">

           <p>
  I am currently pursuing B.Tech in Data Science at
  Geethanjali College of Engineering and Technology
  with a CGPA of 8.47. I have strong interest and
  practical experience in Machine Learning, Data
  Analytics, Web Development and Artificial Intelligence.

  <br /><br />

  I enjoy building intelligent applications,
  analyzing datasets and creating modern user-friendly
  digital solutions. I continuously explore new
  technologies and improve my problem-solving skills
  through real-world projects and hands-on learning.

  <br /><br />

  My goal is to become a skilled Software Developer
  and AI Engineer capable of developing impactful
  applications that solve real-world challenges.
</p>

          </div>

          <div className="about-info">

            <div className="info-item">
              <FaUserGraduate />
              <div>
                <h4>Degree</h4>
                <p>B.Tech Data Science</p>
              </div>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Hyderabad</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>srinivas1884chary@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaBrain />
              <div>
                <h4>CGPA</h4>
                <p>8.47</p>
              </div>
            </div>

          </div>

        </div>

      </section>
<hr></hr>
      {/* SKILLS */}

<section className="skills" id="skills">

  <h2 className="section-title">
    Skills
  </h2>

  <div className="skills-grid">

    {/* MAIN SKILLS */}

    <div className="skill-card">
      <FaPython />
      <h3>Python</h3>
    </div>

    <div className="skill-card">
      <FaBrain />
      <h3>Machine Learning</h3>
    </div>

    <div className="skill-card">
      <IoLogoJavascript />
      <h3>JavaScript</h3>
    </div>

    <div className="skill-card">
      <FaHtml5 />
      <h3>HTML & CSS</h3>
    </div>

    

    {/* EXTRA SKILLS */}

{showMore && (

  <>
<div className="skill-card">
      <FaDatabase />
      <h3>SQL</h3>
    </div>

    <div className="skill-card">
      <FaReact />
      <h3>React</h3>
    </div>
    <div className="skill-card">
      <FaRobot />
      <h3>Deep Learning</h3>
    </div>

    <div className="skill-card">
      <FaChartBar />
      <h3>Data Analytics</h3>
    </div>

    <div className="skill-card">
      <FaCode />
      <h3>Pandas</h3>
    </div>

    <div className="skill-card">
      <FaBrain />
      <h3>Artificial Intelligence</h3>
    </div>

    <div className="skill-card">
      <FaLaptopCode />
      <h3>Frontend Development</h3>
    </div>

    <div className="skill-card">
      <FaChartLine />
      <h3>Power BI</h3>
    </div>

  </>

)}
    {/* MORE BUTTON */}

    <div
      className="skill-card more-skill-card"
      onClick={() => setShowMore(!showMore)}
    >

      <h3>
        {showMore
          ? "Show Less"
          : "+ More Skills"}
      </h3>

    </div>

  </div>

</section>
      {/* PROJECTS */}
<hr></hr>
      {/* PROJECTS */}

<section className="projects" id="projects">

  <h2 className="section-title">
    Projects
  </h2>

  <div className="projects-grid">

    {/* Unified AI Agent */}

    <div className="project-card">

      <img
        src="projects/uni.png"
        alt=""
      />

      <div className="project-content">

        <h3>Unified AI Agent</h3>

        <p>
          Intelligent AI Agent for automating tasks across
          Gmail, Google Drive, Calendar and Docs using AI,
          NLP and Large Language Models.
        </p>

       

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/Unified-AI-Agent-For-Automating-Tasks-Across-Google-Workspace"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

    {/* Alternative Medicine */}

    <div className="project-card">

      <img
        src="projects/alt.png"
        alt=""
      />

      <div className="project-content">

        <h3>Alternative Medicine Recommendation</h3>

        <p>
          ML-powered recommendation system that suggests
          alternative medicines based on user input and
          medicine similarity analysis.
        </p>

      

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/alternative_medicine_recommendation_system"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

    {/* Movie Sentiment */}

    <div className="project-card">

      <img
        src="projects/mov.png"
        alt=""
      />

      <div className="project-content">

        <h3>Movie Review Sentiment Analysis</h3>

        <p>
          NLP-based sentiment analysis system that predicts
          whether movie reviews are positive or negative
          using machine learning models.
        </p>

        

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/Movie-Review-Sentiment-Analysis"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

    {/* Fingerprint */}

    <div className="project-card">

      <img
        src="projects/fin.png"
        alt=""
      />

      <div className="project-content">

        <h3> Fingerprint Based Access Control System for College Events</h3>

        <p>
          Biometric event access system using fingerprint
          authentication, Arduino and Python for secure
          participant verification.
        </p>

        

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/Fingerprint-Based-Access-Control-System-for-College-Events"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

    {/* Steganography */}

    <div className="project-card">

      <img
        src="projects/ste.png"
        alt=""
      />

      <div className="project-content">

        <h3>Steganography Web Application</h3>

        <p>
          Secure web application using AES-256 encryption
          and image steganography to hide and retrieve
          confidential messages.
        </p>

        

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/Steganography"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

    {/* Foodies */}

    <div className="project-card">

      <img
        src="projects/fod.png"
        alt=""
      />

      <div className="project-content">

        <h3>Foodies Restaurant Finder</h3>

        <p>
          Responsive restaurant discovery application
          helping users locate nearby restaurants within
          a specified radius.
        </p>

       

        <div className="project-buttons">

          <a
            href="https://github.com/srinivas-1884/Foodies_App_Project"
            target="_blank"
          >
            Explore Project →
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
<hr></hr>
{/* CERTIFICATES */}

{/* CERTIFICATES */}

<section className="certificates" id="certificates">

  <h2 className="section-title">
    Certifications
  </h2>

  <div className="certificate-grid">

    {/* CARD 1 */}

    <a
      href="/certificates/csa.jpg"
      target="_blank"
      className="certificate-card"
    >

      <img
        src="/certificates/csa.jpg"
        alt=""
      />

      <div className="certificate-content">

        <h3>
          Certified System Administrator
        </h3>

        <p>
          ServiceNow • March 2025
        </p>

      </div>

    </a>

    {/* CARD 2 */}

    <a
      href="/certificates/cad.jpg"
      target="_blank"
      className="certificate-card"
    >

      <img
        src="/certificates/cad.jpg"
        alt=""
      />

      <div className="certificate-content">

        <h3>
          Certified Application Developer
        </h3>

        <p>
          ServiceNow • May 2025
        </p>

      </div>

    </a>

    {/* CARD 3 */}

    <a
      href="/certificates/jse.jpg"
      target="_blank"
      className="certificate-card"
    >

      <img
        src="/certificates/jse.jpg"
        alt=""
      />

      <div className="certificate-content">

        <h3>
          JSE JavaScript Programmer
        </h3>

        <p>
          JS Institute • November 2024
        </p>

      </div>

    </a>

    {/* EXTRA CARDS */}

    {showMore && (

      <>

        <a
          href="/certificates/python.jpg"
          target="_blank"
          className="certificate-card"
        >

          <img
            src="/certificates/python.jpg"
            alt=""
          />

          <div className="certificate-content">

            <h3>
              Python Essentials
            </h3>

            <p>
              Cisco • September 2024
            </p>

          </div>

        </a>


        <a
          href="/certificates/ba.jpg"
          target="_blank"
          className="certificate-card"
        >

          <img
            src="/certificates/ba.jpg"
            alt=""
          />

          <div className="certificate-content">

            <h3>
              Business Analytics with Excel
            </h3>

            <p>
              Simplilearn • July 2024
            </p>

          </div>

        </a>
<a
  href="/certificates/ac.jpg"
  target="_blank"
  className="certificate-card"
>

  <img
    src="/certificates/ac.jpg"
    alt=""
  />

  <div className="certificate-content">

    <h3>
      Data Analytics & Visualization
    </h3>

    <p>
      Accenture North America • September 2024
    </p>

  </div>

</a>

<a
  href="/certificates/mc.jpg"
  target="_blank"
  className="certificate-card"
>

  <img
    src="/certificates/mc.jpg"
    alt=""
  />

  <div className="certificate-content">

    <h3>
      Micro-Certification ServiceNow
    </h3>

    <p>
      ServiceNow • January 2025
    </p>

  </div>

</a>

<a
  href="/certificates/es.jpg"
  target="_blank"
  className="certificate-card"
>

  <img
    src="/certificates/es.jpg"
    alt=""
  />

  <div className="certificate-content">

    <h3>
      AI-ML Virtual Internship
    </h3>

    <p>
      EduSkills & Google for Developers • 2024
    </p>

  </div>

</a>

<a
  href="/certificates/hc.jpg"
  target="_blank"
  className="certificate-card"
>

  <img
    src="/certificates/hc.jpg"
    alt=""
  />

  <div className="certificate-content">

    <h3>
      Hashgraph Developer Course
    </h3>

    <p>
      Hedera Hashgraph • May 2024
    </p>

  </div>

</a>
      </>

    )}

    {/* MORE BUTTON */}

    <div className="more-cert-card"
    onClick={() => setShowMore(!showMore)}>
  <div className="plus-icon">+</div>

  <h3>More Certificates</h3>

  <p>
    View all certifications
  </p>
</div>

  </div>

</section>
<hr></hr>
{/* INTERNSHIPS */}

<section className="internships" id="internships">

  <h2 className="section-title">
    Internships
  </h2>

  <div className="internship-grid">

    {/* CODERONE */}

    <a
      
      className="internship-card"
    >

      <img
        src="/internships/co.jpg"
        alt=""
      />

      <div className="internship-content">

        <h3>
          Data Science & Analytics Intern
        </h3>

        <p>
          CoderOne • Dec 2024 - Jan 2025
        </p>

      </div>

    </a>

    {/* AGNIRVA */}

    <a
      className="internship-card"
    >

      <img
        src="/internships/ag.jpg"
        alt=""
      />

      <div className="internship-content">

        <h3>
          Space Internship Program
        </h3>

        <p>
          Agnirva • September 2024
        </p>

      </div>

    </a>

    {/* AMDOX */}

    <a
      className="internship-card"
    >

      <img
        src="/internships/am.jpg"
        alt=""
      />

      <div className="internship-content">

        <h3>
          Web Developer Intern 
        </h3>

        <p>
          Amdox Technologies • Feb - May 2026
        </p>

      </div>

    </a>

  </div>

</section>

<hr></hr>
      {/* CONTACT */}

  <section className="contact" id="contact">

  <h2 className="section-title">
    Contact Me
  </h2>

  <div className="contact-grid">

    {/* EMAIL */}
<a
  className="contact-card"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=srinivas1884chary@gmail.com"
  target="_blank"
>

  <FaEnvelope />

  <h3>Email</h3>

  <p>
    srinivas1884chary@gmail.com
  </p>

</a>

    {/* GITHUB */}

    <a
      href="https://github.com/srinivas-1884"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >

      <FaGithub />

      <h3>GitHub</h3>

      <p>
        github.com/srinivas-1884
      </p>

    </a>

    {/* LINKEDIN */}

    <a
      href="https://linkedin.com/in/thimmapuram-srinivas-chary"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >

      <FaLinkedin />

      <h3>LinkedIn</h3>

      <p>
        linkedin.com/in/thimmapuram-srinivas-chary
      </p>

    </a>

  </div>

</section>

    </div>
  );
}

export default App;

