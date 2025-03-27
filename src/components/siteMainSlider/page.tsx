import "./MainSlider.css";
import SiteAnimationSlide from "./svg/siteAnimationSlide";
import SiteSlideBg from "./svg/siteSlideBg";
import SiteSlideButton from "./svg/siteSlideButton";

interface siteMainSliderProps {
  className: string;
}

export default function SiteMainSlider({
  className = "",
}: siteMainSliderProps) {
  return (
    <div className={"main-slider " + className}>
      <SiteSlideBg className="" />
      <SiteSlideButton className="" />

      <button className="more-details-button">
        <div className="button-bg-slider"></div>
        <div className="more-details">More Details </div>
      </button>
      <div className="it-is-a-long-established-fact-that-a-reader-will-be-by-the-readable-content-of-a-page">
        It is a long established fact that a reader will be
        <br />
        by the readable content of a page.{" "}
      </div>
      <div className="clinic-beauty-consultant">
        Clinic &amp; beauty
        <br />
        consultant{" "}
      </div>
      <SiteAnimationSlide className="" />
    </div>
  );
}
