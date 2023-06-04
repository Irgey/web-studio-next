import Image from "next/image";

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
        <ul className="social">
          <li>
            <a
              className="social__link"
              href="http://instagram.com"
              aria-label="Інстаграм"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social__icon" width="20" height="20">
                <use href="./images/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="social__link"
              href="http://twitter.com"
              aria-label="Твітер"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social__icon" width="20" height="20">
                <use href="./images/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="social__link"
              href="http://fb.com"
              aria-label="Фейсбук"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social__icon" width="20" height="20">
                <use href="./images/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              className="social__link"
              href="http://linkedin.com"
              aria-label="Лінкед ін"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="social__icon" width="20" height="20">
                <use href="./images/sprite.svg#icon-linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default TeamCard;
