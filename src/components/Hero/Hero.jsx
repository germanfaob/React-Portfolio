import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__texts">
        <h1 className="hero__title">German Figueroa</h1>
        <p className="hero__subtitle">Desarrollador web Front-End</p>
      </div>
      <div className="hero__icons">
        <a
          className="hero__icons-bg"
          href="https://github.com/germanfaob"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="hero__icons-img"
            src="../../images/github.png"
            alt="Icono de Github"
          />
        </a>

        <a
          className="hero__icons-bg"
          href="https://www.linkedin.com/in/germanfig/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="hero__icons-img"
            src="../../images/linkedin.png"
            alt="Icono de Linkedin"
          />
        </a>

        <a
          className="hero__icons-bg"
          href="../../resume/resume.pdf"
          target="_blank"
        >
          <img
            className="hero__icons-img"
            src="../../images/resume.png"
            alt="Icono de curriculum"
          />
        </a>
      </div>
    </div>
  );
};
