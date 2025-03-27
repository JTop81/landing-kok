export interface siteProfessionalTileDescProps {
  className: string;
}

export default function SiteProfessionalTitleDesc({
  className = "",
}: siteProfessionalTileDescProps) {
  return (
    <div className="tittle-desc">
      <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-ut-aliquam">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.{" "}
      </div>
      <div className="the-professional-expert">The Professional expert </div>
      <div className="professional-teams2">Professional Teams </div>
    </div>
  );
}
