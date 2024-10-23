import Image from "next/image";

export default function Home() {

  return (
    <div className="homeContainer">
      <div className="content">
        <h1 className="heading">
        Hi! <span className="text-gray-950">I am Ghulam Akber</span>
        </h1>
        <p className="para">Web Developer</p>
      <p className="para2">A passionate web developer skilled in TypeScript, Next.js, and Tailwind CSS. I specialize in creating dynamic, user-friendly web applications with a strong focus on clean code and intuitive design. Explore my projects to see how I turn ideas into reality through code!
      </p>
      <a 
        href="/resume.pdf"
        className="resume"
        >View CV</a>
      </div>
      <div>
        <Image
        src={'/images/image1.png'}
        alt="my-pp"
        width={350}
        height={0}
        className="image1"
        />
        <Image
        src={'/images/image2.png'}
        alt="my-pp"
        width={300}
        height={0}
        className="image2"
        />
      </div>
    </div>
  );
}
