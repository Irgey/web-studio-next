import Link from "next/link";

import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import navLinks from "../../../public/data/NavLinks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const { pathname } = useRouter();

  const toggleMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
    isMobileMenuOpened
      ? enableBodyScroll(document.body)
      : disableBodyScroll(document.body);
  };
  return (
    <header className="header">
      {/* <!-- Header navigation panel --> */}
      <div className="header__container container">
        <Link className="logo logo__header" href="/">
          <span className="logo__part">Web</span>Studio
        </Link>
        <button
          className="header__btn-menu js-open-menu"
          type="button"
          onClick={toggleMenu}
        >
          <svg className="" width="24" height="16">
            <use href="./images/sprite.svg#icon-menu"></use>
          </svg>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.id}>
                <Link
                  className={`nav__link ${
                    pathname === link.path ? "nav__link--current" : null
                  }`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- Contacts list --> */}
        <ul className="contacts">
          <li className="contacts__item">
            <a className="contacts__link" href="mailto:info@devstudio.com">
              <svg className="contacts__icon" width="16" height="12">
                <use href="./images/sprite.svg#icon-mail"></use>
              </svg>
              info@devstudio.com
            </a>
          </li>
          <li className="contacts__item">
            <a className="contacts__link" href="tel:+380961111111">
              <svg className="contacts__icon" width="10" height="16">
                <use href="./images/sprite.svg#icon-telephone"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li>
        </ul>
      </div>

      <MobileMenu isOpened={isMobileMenuOpened} onCloseMenuClick={toggleMenu} />
    </header>
  );
};

export default Header;
