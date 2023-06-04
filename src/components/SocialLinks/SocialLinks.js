const SocialLinks = ({ links }) => {
  return (
    <ul className="social">
      <li>
        <a
          className="social__link"
          href={links.instagram}
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
          href={links.twitter}
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
          href={links.facebook}
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
          href={links.linkedin}
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
