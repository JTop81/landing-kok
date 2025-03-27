import "./SiteHeader.css";

interface siteHeaderProps {
  className: string;
}

export default function SiteHeader({ className = "" }: siteHeaderProps) {
  return (
    <div className={"site-header " + className}>
      <button className="contact-button">
        <div className="button-bg"></div>
        <div className="contact">Contact </div>
      </button>
      <div className="main-menu">
        <div className="blog">
          <a href="/">Blog</a>{" "}
        </div>
        <div className="gallery">
          <a href="/">Gallery</a>{" "}
        </div>
        <div className="service">
          <a href="/">Service</a>{" "}
        </div>
        <div className="about">
          <a href="/">About</a>{" "}
        </div>
        <a href="/">
          <div className="home">
            <svg
              className="plus-icon"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3.5"
                y1="2.18557e-08"
                x2="3.5"
                y2="7"
                stroke="#41487F"
              />
              <line
                x1="7"
                y1="3.5"
                x2="-4.37114e-08"
                y2="3.5"
                stroke="#41487F"
              />
            </svg>
            <div className="home2">Home </div>
          </div>
        </a>
      </div>
      <div className="main-logo">
        <div className="ellipse-bg"></div>
        <div className="rectangle-blue"></div>
        <div className="ellipse-white-2"></div>
        <div className="ellipse-white-1"></div>
        <div className="beautice">Beautice </div>
      </div>
    </div>
  );
}
