/* Code generated with AutoHTML Plugin for Figma */
import "./siteContactUs.css";
import AnimationSiteContactUs from "./svg/AnimationSiteContactUs";
import SiteFormContactUs from "./svg/ContactUsForm";

export interface siteContactUsProps {
  className: string;
}

export default function SiteContactUs({ className = "" }: siteContactUsProps) {
  return (
    <div className={"contact-us " + className}>
      <SiteFormContactUs className="" />

      <div className="tittle-desc">
        <div className="lorem-ipsum-dolor-sit-amet-nulla-turapis-tellus">
          Lorem ipsum dolor sit amet nulla turapis tellus.{" "}
        </div>
        <div className="send-your-inquiry-to-our-expert-team">
          Send your inquiry to
          <br />
          our expert team{" "}
        </div>
        <div className="contact-us2">Contact Us </div>
      </div>
      <AnimationSiteContactUs className="" />
    </div>
  );
}
