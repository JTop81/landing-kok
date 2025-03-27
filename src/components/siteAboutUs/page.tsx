import "./AboutUs.css";
import BgAboutUs from "./svg/bgAboutUs";
import LearnMoreButtonAboutUs from "./svg/learnMoreButtonAboutUs";
import PlayButtonAboutUs from "./svg/playButtonAboutUs";
import ThumbnailAboutUs from "./svg/thumbnailAboutUs";
import TitleDescAboutUs from "./svg/titleDescAboutUs";

export interface siteAboutUsProps {
  className: string;
}

export default function SiteAboutUs({ className = "" }: siteAboutUsProps) {
  return (
    <div className={"about-us " + className}>
      <BgAboutUs className="" />
      <ThumbnailAboutUs className="" />
      <PlayButtonAboutUs className="" />
      <LearnMoreButtonAboutUs className="" />
      <TitleDescAboutUs className="" />
    </div>
  );
}
