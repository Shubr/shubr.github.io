import "../App.css";
import Highlight from "./HighlightText";
import resume from '../../dist/assets/resume.pdf';

function Intro() {
  return (
    <div className="intro-body" id="Intro">
      <div className="intro">
        <h1>
          Hi, I'm <Highlight text="Shub" color="#FF7792" />
        </h1>
        <p>Mobile/Web Developer</p>
        <button className="buttons cv">
          <a href={resume} download="Shubham_Cv.pdf">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default Intro;
