import CircleIcon from "./CircleIcon";
import { useParallax } from "react-scroll-parallax";

import "./About.css";

import charles from "../../assets/images/charlesP.png";
import { MdComputer, MdMusicNote, MdFitnessCenter } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import Arrow from "./Arrow";

const About = () => {
  const parallax = useParallax({
    speed: -2,
  });
  return (
    <section className="about">
      <h1>About me</h1>
      <div className="aboutSection">
        <div className="aboutLeft ">
          <div className="aboutPicCont" ref={parallax.ref}>
            <div className="aboutPic">
              <img src={charles} alt="Charles ZimMerlin" className="myPic" />
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="aboutRight">
          <h2>Charles Zimmerlin</h2>
          <p>
            I am a <span className="bold">Full-Stack Software Engineer</span>{" "}
            working in Freelance, based in Strasbourg, France. My expertise
            includes project management, <span className="bold">frontend</span>{" "}
            and <span className="bold">backend</span> development using mainly
            React, React Native, Angular, Java, Node.js, and Python. I am
            certified in <span className="bold">Google UX Design</span> and{" "}
            <span className="bold">IBM Cybersecurity Analysis</span>. My
            interests outside of work include music, fitness and travel.
          </p>
          <div className="aboutIcons">
            <CircleIcon icon={<MdComputer />} />
            <CircleIcon icon={<MdMusicNote />} />
            <CircleIcon icon={<MdFitnessCenter />} />
            <CircleIcon icon={<FaPlaneDeparture />} />
          </div>
        </div>
      </div>
      <Arrow />
    </section>
  );
};

export default About;
