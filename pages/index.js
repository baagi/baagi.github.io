import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bat Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MAIN LANDING PAGE SECTION */}


      <h1>
          Hi, I&apos;m Bat!
      </h1>
      <h1>Software Developer</h1>

      <a>
        Github
      </a>
      <a>
        Linkedin
      </a>
      <a>
        Email
      </a>
      <a>
        Download Resume 
      </a>

      <main>
        <h1 >
          Welcome to my site!
        </h1>

        {/* ABOUT ME SECTION */}

        <h1 >
          About Me
        </h1>

        <h1 >
        I&apos;m currently a 4th year Software Engineering student at Cal Poly, San Luis Obispo. I&apos;m also a Software QA apprentice at an awesome right-to-repair company called iFixit.
        </h1>

        <h1 >
        I love writing code and building new things. 
        </h1>

        <h1 >
          Education
        </h1>

        <h1 >
          California Polytechnic State University
          <br></br> 
          B.S. Software Engineering
          <br></br>
          San Luis Obispo, CA
          <br></br>
          Expected Graduation: June 2022
        </h1>

        <h1 >
          Experience
        </h1>

        <h1 > 
          Software QA 💼 iFixit
          <br></br>
          San Luis Obispo, CA
          <br></br>
          Nov 2020 - Present
        </h1>

        {/* WEB DEV SECTION */}

        <h1 >
          Development
        </h1>

        <h1 > 
          Services
          <br></br>
          Best solutions to your creative project.
          <br></br>
          Do you need a vibrant new website that runs smoothly? Then you found the right person.
          <br></br>
          Contact Me
        </h1>

        <h1 > 
          Web Development
          <br></br>
          Project Management
          <br></br>
          UX/UI design
          <br></br>
          Quality Assurance
        </h1>

        <h1 >
          Techonologies
        </h1>

        <h1 > 
          Front-end
          <br></br>
          Backend
          <br></br>
          Database
          <br></br>
          Tools
        </h1>

      {/* PROJECTS SECTION */}

        <h1 >
          Projects
        </h1>

        <h1 > 
          Project Name
          <br></br>
          Project Description
          <br></br>
          More info / View Project
          <br></br>
          Tech stack: 
        </h1>

      {/* GET IN TOUCH SECTION */}

        <h1 >
          Get In Touch
        </h1>
        
        <a>
          Github
        </a>
      
        <a>
          Linkedin
        </a>

        <a>
          Email
        </a>

      </main>

    </div>
  )
}
