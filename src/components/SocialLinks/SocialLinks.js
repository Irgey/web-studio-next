const SocialLinks = ({ instagram, twitter, facebook, linkedin }) => {
  return (
    <ul className="social">
      <li>
        <a
          className="social__link"
          href={instagram}
          aria-label="Інстаграм"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon" width="20" height="20">
            <use href="/images/sprite.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className="social__link"
          href={twitter}
          aria-label="Твітер"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon" width="20" height="20">
            <use href="/images/sprite.svg#icon-twitter"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className="social__link"
          href={facebook}
          aria-label="Фейсбук"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon" width="20" height="20">
            <use href="/images/sprite.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className="social__link"
          href={linkedin}
          aria-label="Лінкед ін"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="social__icon" width="20" height="20">
            <use href="/images/sprite.svg#icon-linkedin"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
