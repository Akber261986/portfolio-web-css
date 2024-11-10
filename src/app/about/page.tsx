'use client'

import { useState, useEffect } from 'react'; 
import Image from 'next/image';
const about = () => {
  
  const skills = [
    { name: "TypeScript", targetWidth: 85, bg: "bg-blue-500" },
    { name: "Next.js", targetWidth: 60, bg: "bg-yellow-500" },
    { name: "HTML", targetWidth: 90, bg: "bg-green-500" },
    { name: "CSS", targetWidth: 75, bg: "bg-fuchsia-500" },
    { name: "JavaScript", targetWidth: 70, bg: "bg-cyan-500" },
    { name: "React", targetWidth: 45, bg: "bg-red-500" },
  ];

  const [widths, setWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setWidths((prevWidths) => {
          const newWidths = [...prevWidths];
          if (newWidths[index] < skill.targetWidth) {
            newWidths[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newWidths;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <div className='aboutContainer'>
      <div className='aboutHeading'>
      <div>
          <Image
          src="/images/Profile-Pic.png"
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
      <div className='skill'>
        <h1>Skills</h1>
        {skills.map((skill, index) => (
          <div key={index} className='skillCard'>
            <div className='skillName'>
              <span>{skill.name}</span>
            </div>
            <div className='coloredLine'>
            <div
              className={`${skill.bg}`}
              style={{ width: `${widths[index]}%` }}
            ></div>
            </div>
            <span>{widths[index]}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default about
