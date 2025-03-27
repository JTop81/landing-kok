import "./CoreServices.css";
import AnimationBeautyConsulation from "./svg/animationBeautyConsulation";
import AnimationBeautyProduct from "./svg/animationBeautyProduct";
import AnimationSkinTreatments from "./svg/animationSkinTreatments";

interface coreServiecesProps {
  className: string;
}

export default function CoreServices({ className = "" }: coreServiecesProps) {
  return (
    <div className={"core-services " + className}>
      <div className="box-section-right">
        <div className="box-bacground"></div>
        <div className="non-parturient-amet-feugiat-tellus-sagittis-scelerisque-eget-nulla-turpis">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="beauty-product">Beauty product </div>
        <div className="animation-3">
          <div className="ellipse-1"></div>
          <AnimationBeautyProduct className="" />
        </div>
      </div>
      <div className="box-section-mid">
        <div className="box-bacground2"></div>
        <div className="non-parturient-amet-feugiat-tellus-sagittis-scelerisque-eget-nulla-turpis2">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="skin-treatments">Skin treatments </div>
        <div className="animation-2">
          <div className="ellipse-12"></div>
          <AnimationSkinTreatments className="" />
        </div>
      </div>
      <div className="box-section-left">
        <div className="box-bacground3"></div>
        <div className="non-parturient-amet-feugiat-tellus-sagittis-scelerisque-eget-nulla-turpis3">
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="beauty-consultation">Beauty consultation </div>
        <div className="animation-1">
          <div className="ellipse-2"></div>
          <AnimationBeautyConsulation className="" />
        </div>
      </div>
      <div className="tittle-desc">
        <div className="porta-rhoncus-orci-condimentum-vitae-lobortis-eu-dignissim-non-massa-non-parturient-amet-feugiat-tellus-sagittis-scelerisque-eget-nulla-turpis">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.{" "}
        </div>
        <div className="learn-services-to-focus-on-your-beauty">
          Learn services to focus
          <br />
          on your beauty{" "}
        </div>
        <div className="main-services">Main Services </div>
      </div>
    </div>
  );
}
