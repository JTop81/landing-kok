interface titleDescAboutUsProps {
  className: string;
}

export default function TitleDescAboutUs({ className = "" }: titleDescAboutUsProps) {
  return (
    <div className="tittle-desc">
      <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-elit-quam-suscipit-purus-donec-amet-egestas-volutpat-facilisi-eu-libero-nunc-ipsum-ornare-mauris-sit-quam-quis-enim-varius-tellus-in-suspendisse-placerat-id-dui-erat-sed-quam-tellus-in-purus-pellentesque-congue-fringilla-cras-tellus-enim">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
        suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
        ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
        placerat.
        <br />
        <br />
        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras
        tellus enim.{" "}
      </div>
      <div className="we-are-the-best-beauty-clinic">
        We are the best beauty clinic{" "}
      </div>
      <div className="about-us2">About Us </div>
    </div>
  );
}
