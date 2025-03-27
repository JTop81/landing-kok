import BackgroundBubble from "./assets/BackgroundBubble";

import SiteFooter from "./siteFooter/page";
import SiteContactUs from "./siteContactUs/page";
import SiteProfessionalTeam from "./siteProfesionalTeam/page";
import SiteAboutUs from "./siteAboutUs/page";
import CoreServices from "./siteMainServices/page";
import SiteMainSlider from "./siteMainSlider/page";
import SiteHeader from "./siteHeader/page";

export default function Home({ className = "" }: HomeProps) {
  return (
    <div
      className={`font-poppins inline-flex h-[4989px] w-[1440px] resize flex-row overflow-hidden ${className}`}
    >
      <div className="relative flex h-full w-full items-end overflow-clip bg-white pb-[918px] pt-[3142px] pr-64">
        <SiteFooter className={"*"} />
        <BackgroundBubble className="relative mr-[-0.33px] h-[929px] w-[1176px]" />
        <SiteContactUs className="" />
        <SiteProfessionalTeam className="" />

        <SiteAboutUs className="" />

        <CoreServices className="" />

        {/* ////////////// */}
        {/*some information  */}
        <SiteMainSlider className="" />
        {/*some information  */}
        <SiteHeader className=""/>
        
      </div>
    </div>
  );
}

interface HomeProps {
  className: string;
}
