import "./siteFooter.css";
import FooterBG from "./svg/FooterBG";
import SocialIcon_pack from "./svg/SocialIcon_packFooter";
import ArrowBackToTop from "./svg/ArrowBackToTop";
import OtherInfomations from "./svg/OtherInfomations";
import MainInfomations from "./svg/MainInfomations";
import AddrressInfomations from "./svg/AddressInfomations";

interface SiteFooterProps {
  className: string;
}
export default function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <div className={"site-footer " + className}>
      <div className="site-footer__bottom-bg"></div>
      <FooterBG className="" />
      <div className="site-footer__alt-desain-studio-2021-all-right-reserved">
        © AltDesain Studio 2021 - All right reserved. Footer
      </div>
      <SocialIcon_pack className="" />
      <ArrowBackToTop className="" />
      <OtherInfomations className="" />
      <MainInfomations className="" />
      <AddrressInfomations className=""/>
    </div>
  );
}
