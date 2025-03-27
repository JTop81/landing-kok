interface learnMoreButtonAboutUsProps {
  className: string;
}

export default function LearnMoreButtonAboutUs({ className = "" }: learnMoreButtonAboutUsProps) {
  return (
    <button className="more-details-button">
      <div className="button-bg"></div>
      <div className="learn-more">Learn More </div>
    </button>
  );
}