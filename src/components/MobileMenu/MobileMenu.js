import Link from "next/link";
import { useRouter } from "next/router";
import navLinks from "../../../public/data/NavLinks";
const MobileMenu = ({ isOpened, onCloseMenuClick }) => {
  const { pathname } = useRouter();

  return (
    <div
      className={`menu-container js-menu-container ${
        isOpened ? "is-open" : null
      }`}
      id="mobile-menu"
    >
      <button
        className={`menu-toggle js-close-menu`}
        aria-label="Кнопка для закриття меню"
        onClick={onCloseMenuClick}
      >
        <svg className="menu-toggle__icon" width="19" height="19">
          <use href="./images/sprite.svg#close"></use>
        </svg>
      </button>

      <ul className="mobile-menu">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              className={`mobile-menu__link ${
                pathname === link.path ? "mobile-menu__link--current" : null
              }`}
              href={link.path}
              onClick={onCloseMenuClick}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="contacts-socials-wrapper">
        <ul className="contacts-mobile">
          <li>
            <a
              className="contacts-mobile__link contacts-mobile__link--accent"
              href="tel:+380961111111"
            >
              +38 096 111 11 11
            </a>
          </li>
          <li>
            <a
              className="contacts-mobile__link"
              href="mailto:info@devstudio.com"
            >
              info@devstudio.com
            </a>
          </li>
        </ul>
        <ul className="socials-mobile">
          <li className="socials-mobile__item">
            <a
              className="socials-mobile__link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="socials-mobile__item">
            <a
              className="socials-mobile__link"
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="socials-mobile__item">
            <a
              className="socials-mobile__link"
              href="https://fb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="socials-mobile__item">
            <a
              className="socials-mobile__link"
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
