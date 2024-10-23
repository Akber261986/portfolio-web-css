import React from 'react';
import Image from 'next/image';
const about = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutHeading'>
      <div>
          <Image
          src="/images/Profile-pic.png"
          alt="Ghulam Akber"
          width={130}
          height={130}
          className="aboutImage" 
          />
        </div>
      <h1>About Me</h1>
      <p>
            Hi, I’m Ghulam Akber, a passionate web developer skilled in
            TypeScript, Next.js, and modern web technologies. I enjoy building
            responsive and interactive web applications with a strong focus on
            user experience and performance.
          </p>
          <p>
            With a deep understanding of TypeScript, I’ve built various
            projects including a dynamic resume builder, CLI-based ATM machine,
            and more. I’m constantly learning and expanding my skill set to
            deliver innovative solutions.
          </p>
      <a href="/resume.pdf" download className="aboutBtn ">Download Resume</a>
      </div>
    </div>
  )
}

export default about
