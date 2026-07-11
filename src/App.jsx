import "./App.css";
import { TypeAnimation } from "react-type-animation";
import heroImg from "./assets/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Ujjawal Baliyan</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <h1>Hi, I'm Ujjawal Baliyan 👋</h1>

<img
  src={heroImg}
  alt="Ujjawal Baliyan"
  className="profile-pic"
/>

<TypeAnimation
  sequence={[
    "Java Developer",
    2000,
    "Full Stack Developer",
    2000,
    "DSA Enthusiast",
    2000,
    "MCA Student",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
/>
<p>
  Passionate about building scalable web applications using Java and React.
  I enjoy solving Data Structures & Algorithms problems, learning modern
  technologies, and creating software that delivers real-world value.
</p>

       <div className="hero-buttons">

  <a
    href="/resume.pdf"
    download
    className="resume-btn"
  >
    📄 Download Resume
  </a>

  <a
    href="#contact"
    className="contact-btn"
  >
    📩 Contact Me
  </a>

</div>
        <div className="social-icons">
  <a
    href="https://github.com/ujjawal808"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/ujjawal808"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://leetcode.com/u/Ujjawalbaliyan"
    target="_blank"
    rel="noreferrer"
    aria-label="LeetCode"
  >
    <SiLeetcode />
  </a>
</div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I'm an MCA student with a strong interest in Software Development, Data Structures & Algorithms, and Full Stack Web Development. I enjoy solving coding challenges on LeetCode, building responsive web applications using React and Java, and continuously learning modern technologies.
        </p>
      </section>
            {/* Skills */}
      <section id="skills" className="skills">

  <h2>Skills</h2>

  <div className="skills-category">

    <h3>Programming Languages</h3>

    <div className="skills-grid">
      <div>Java</div>
      <div>Python</div>
      <div>C</div>
    </div>

    <h3>Frontend</h3>

    <div className="skills-grid">
      <div>HTML</div>
      <div>CSS</div>
      <div>JavaScript</div>
      <div>React</div>
    </div>

    <h3>Backend</h3>

    <div className="skills-grid">
      <div>Node.js</div>
      <div>Spring Boot</div>
    </div>

    <h3>Database</h3>

    <div className="skills-grid">
      <div>SQL</div>
    </div>

    <h3>Tools</h3>

    <div className="skills-grid">
      <div>Git</div>
      <div>GitHub</div>
      <div>VS Code</div>
      <div>Postman</div>
    </div>

  </div>

</section>
<section className="stats">

  <div className="stat-card">
    <h2>50+</h2>
    <p>DSA Problems</p>
  </div>

  <div className="stat-card">
    <h2>3+</h2>
    <p>Projects</p>
  </div>

  <div className="stat-card">
    <h2>1+</h2>
    <p>Year Learning</p>
  </div>

  <div className="stat-card">
    <h2>100%</h2>
    <p>Dedication</p>
  </div>

</section>

      {/* Projects */}
      
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>🧠 Brain Tumor Detection using Deep Learning</h3>

<p>
Developed a CNN-based web application using
TensorFlow, Flask and OpenCV for automatic
brain tumor classification from MRI images.
</p>
<p>

<b>Tech Stack:</b>

TensorFlow • Flask • OpenCV • CNN

</p>
         
        </div>

        <div className="project-card">
          
          <h3>📰 AI Article Summarizer</h3>

<p>
Built a React application using RapidAPI
that summarizes long articles into concise,
easy-to-read summaries.
</p>
<p>

<b>Tech Stack:</b>

React • Redux Toolkit • RapidAPI

</p>
        </div>

        <div className="project-card">
          
          <h3>Java Pattern Repository</h3>
          <p>
            Collection of Java pattern programs and DSA solutions
            uploaded on GitHub.
          </p>
          <p>

<b>Tech Stack:</b>

Java • DSA • GitHub

</p>
        </div>
      </section>
      <section className="achievements">

  <h2>Achievements</h2>

  <div className="skills-grid">

    <div>🏆 50+ DSA Problems</div>

    <div>💻 Java Developer</div>

    <div>🚀 Full Stack Projects</div>

    <div>🎓 MCA Student</div>

  </div>

</section>
<section className="learning">

<h2>Currently Learning</h2>

<div className="skills-grid">

<div>Spring Boot</div>

<div>REST APIs</div>

<div>System Design</div>

<div>Advanced Java</div>

</div>

</section>

     {/* Contact */}
<section id="contact" className="contact">
  <h2>Contact Me</h2>

  <p>
   📧 Email:
    <a href="mailto:ubaliyan808@gmail.com">
      ubaliyan808@gmail.com
    </a>
  </p>

  <p>
   🐙 GitHub:
    <a
      href="https://github.com/ujjawal808"
      target="_blank"
      rel="noreferrer"
    >
      github.com/ujjawal808
    </a>
  </p>

  <p>
    💼 LinkedIn:
    <a
      href="https://linkedin.com/in/ujjawal808"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/ujjawal808
    </a>
  </p>

  <p>
  🏆 LeetCode:
    <a
      href="https://leetcode.com/u/Ujjawalbaliyan"
      target="_blank"
      rel="noreferrer"
    >
      leetcode.com/u/Ujjawalbaliyan
    </a>
  </p>
</section>
<button
  className="scroll-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ↑
</button>

<footer className="footer">

<h3>Thanks for Visiting ❤️</h3>

<p>

© {new Date().getFullYear()} Ujjawal Baliyan

</p>

<p>

Built with ❤️ using React • Vite • JavaScript • CSS

</p>

</footer>
    </div>
  );
}

export default App;