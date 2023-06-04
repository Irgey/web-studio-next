import Image from "next/image";
import SocialLinks from "../SocialLinks/SocialLinks";

const TeamCard = ({ photo, fullName, role, socials }) => {
  return (
    <li className="team__item">
      <Image
        src={photo}
        alt={`${fullName}, ${role}`}
        width="450"
        height="460"
        quality={95}
      />
      <div className="team__content-wrapper">
        <h3 className="team__min-title">{fullName}</h3>
        <p className="team__text text">{role}</p>
        <SocialLinks {...socials} />
      </div>
    </li>
  );
};

export default TeamCard;
