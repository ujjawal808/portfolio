import "./App.css";
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
        

        <h2>Java Developer | Full Stack Developer | MCA Student</h2>

        <p>
          Passionate about Java, Data Structures & Algorithms, Full Stack Development, and building modern, responsive web applications.
        </p>

        <a
  href="/Ujjawal_Baliyan_Resume.pdf"
  download
  className="resume-btn"
>
  Download Resume
</a>
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

        <div className="skills-grid">
          <div>Java</div>
          <div>Python</div>
          <div>C</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Node.js</div>
          <div>SQL</div>
          <div>Git & GitHub</div>
          <div>DSA</div>
          <div>Spring Boot</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Brain Tumor Detection</h3>
          <p>
            Deep Learning based Brain Tumor Detection using CNN,
            TensorFlow, Flask and OpenCV.
          </p>
        </div>

        <div className="project-card">
          <h3>Article Summarizer</h3>
          <p>
            React-based web application that summarizes articles
            using AI APIs.
          </p>
        </div>

        <div className="project-card">
          <h3>Java Pattern Repository</h3>
          <p>
            Collection of Java pattern programs and DSA solutions
            uploaded on GitHub.
          </p>
        </div>
      </section>

     {/* Contact */}
<section id="contact" className="contact">
  <h2>Contact Me</h2>

  <p>
    Email:
    <a href="mailto:ubaliyan808@gmail.com">
      ubaliyan808@gmail.com
    </a>
  </p>

  <p>
    GitHub:
    <a
      href="https://github.com/ujjawal808"
      target="_blank"
      rel="noreferrer"
    >
      github.com/ujjawal808
    </a>
  </p>

  <p>
    LinkedIn:
    <a
      href="https://linkedin.com/in/ujjawal808"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/ujjawal808
    </a>
  </p>

  <p>
    LeetCode:
    <a
      href="https://leetcode.com/u/Ujjawalbaliyan"
      target="_blank"
      rel="noreferrer"
    >
      leetcode.com/u/Ujjawalbaliyan
    </a>
  </p>
</section>

<footer className="footer">
 <p>© {new Date().getFullYear()} Ujjawal Baliyan. All Rights Reserved.</p>
</footer>
    </div>
  );
}

export default App;