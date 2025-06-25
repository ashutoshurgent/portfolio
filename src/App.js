import React, { useEffect, useState } from 'react';
import './App.css';
import { FaReact, FaJs, FaNodeJs, FaAws, FaDocker, FaCss3, FaLightbulb, FaPuzzlePiece, FaSyncAlt } from 'react-icons/fa'
import Delhi from './Delhi.jpeg';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const script = `   import React, { useEffect, useState } from 'react';
  import './App.css';
  import { FaReact, FaJs, FaNodeJs, FaAws, FaDocker, FaCss3 } from 'react-icons/fa';
    useEffect(() => {
      console.log('Effect running');
      let index = 0;
      const interval = setInterval(() => {
        if (index < script.length) {
          setTypedText((prev) => prev + script[index]);
          index++;
        } else {
          setTimeout(() => {
            setTypedText('');
            index = 0;
          }, 2000); // 2-second pause before reset
        }
      }, 20);
      return () => clearInterval(interval);
    }, [script]);

    // Debug: Log to confirm typing is working
    useEffect(() => {
      console.log('Typed Text:', typedText);
    }, [typedText]);

    return (
      <div className="app">
        {/* Background Typing Layer */}
        <div className="typing-background" aria-hidden="true">
          <pre>{typedText}<span className="cursor">|</span></pre>
        </div>

        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <h1>Ashutosh Kumar</h1>
            <p>Full Stack Developer | React Enthusiast</p>
            <nav>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Hello! I’m Ashutosh, a Marine Engineer, a Developer and a problem solver who loves challenges and tackles them down with all my effort. I have a lil' experience when it comes to corporate world but soon I will be a giant. ^_^
          </p>
        </section>
  `;

  useEffect(() => {
    console.log('Effect running');
    let index = 0;
    const interval = setInterval(() => {
      if (index < script.length) {
        setTypedText((prev) => prev + script[index]);
        index++;
      } else {
        setTimeout(() => {
          setTypedText('');
          index = 0;
        }, 2000); // 2-second pause before reset
      }
    }, 50);
    return () => clearInterval(interval);
  }, [script]);

  // Debug: Log to confirm typing is working
  useEffect(() => {
    console.log('Typed Text:', typedText);
  }, [typedText]);

  return (
    <div className="app">
      {/* Background Typing Layer */}
      <div className="typing-background" aria-hidden="true">
        <pre>{typedText}<span className="cursor">|</span></pre>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1>Ashutosh Kumar</h1>
          <p>Marine Engineer | Data Analyst | Full Stack Developer | React Enthusiast</p>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m Ashutosh Kumar, a passionate problem-solver with a strong foundation in engineering and a growing expertise in full stack development. I hold a BTech in Marine Engineering from DMET Kolkata, where I developed a deep understanding of maritime systems, followed by an MTech in Engineering Analysis and Design from the Department of Applied Mechanics at IIT Delhi, honing my skills in technical analysis and design optimization. My professional journey began as a Carbon Consultant Data Analyst at Azolla, a business unit under Synergy Marine, where I contribute to decarbonization efforts in the marine industry by leveraging data to reduce carbon emissions. Through this portfolio, I aim to showcase my evolving skills as a full stack developer, blending my technical roots with a creative approach to building impactful web solutions. ^_^
        </p>
      </section>
      {/* Traits Section */}
      <section id="traits" className="section">
        <div className="traits-grid">
          <div className="trait-card">
            <FaLightbulb size={40} color="#00d8ff" />
            <p>Creativity</p>
          </div>
          <div className="trait-card">
            <FaPuzzlePiece size={40} color="#00d8ff" />
            <p>Problem-Solving</p>
          </div>
          <div className="trait-card">
            <FaSyncAlt size={40} color="#00d8ff" />
            <p>Adaptability</p>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <FaReact size={40} color="#00d8ff" />
            </a>
          </div>
          <div className="skill-card">
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
              <FaJs size={40} color="#00d8ff" />
            </a>
          </div>
          <div className="skill-card">
            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
              <FaNodeJs size={40} color="#00d8ff" />
            </a>
          </div>
          <div className="skill-card">
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <FaAws size={40} color="#00d8ff" />
            </a>
          </div>
          <div className="skill-card">
            <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">
              <FaDocker size={40} color="#00d8ff" />
            </a>
          </div>
          <div className="skill-card">
            <a href="https://web.dev/learn/css" target="_blank" rel="noopener noreferrer">
              <FaCss3 size={40} color="#00d8ff" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Site</h3>
            <p>A responsive portfolio built with React and dark theme styling.</p>
            <a href="https://github.com/ashutoshurgent/portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
          <div className="project-card">
            <h3>Antifouling Paint Web-App</h3>
            <p>A tool whose frontend is designed using React and backend is designed using Flask. The hosting and deployment has been done over Github. The backend call has been done using an API.</p>
            <a href="https://ashutoshurgent.github.io/Antifouling" target="_blank" rel="noopener noreferrer">View Page</a>
            <a href="https://github.com/ashutoshurgent/Antifouling" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p className='contact'>
          Email:{' '}
          <a href={`mailto:${'ashutoshurgent'.split('').reverse().join('')}@gmail.com`.split('').reverse().join('')}>
            ashutoshurgent@gmail.com
          </a>
        </p>
        <p className='contact'>LinkedIn: <a href="https://linkedin.com/in/ashutoshurgent" target="_blank" rel="noopener noreferrer">linkedin.com/in/ashutoshurgent</a></p>
        <p className='contact'>GitHub: <a href="https://github.com/ashutoshurgent" target="_blank" rel="noopener noreferrer">github.com/ashutoshurgent</a></p>
      </section>
      {/* Sidebar Images */}
      <div className="sidebar-images">
        <img src={Delhi} alt="Delhi" className="sidebar-image" />
      </div>
      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.</p>
      </footer>

      
    </div>
  );
};

export default App;