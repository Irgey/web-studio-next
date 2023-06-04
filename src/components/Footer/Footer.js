const Footer = () => {
  return (
    <footer className="footer section">
      {/* <!-- Logo footer --> */}
      <div className="footer__container container">
        <div className="address-wrapper">
          <a className="logo logo__footer" href="./index.html">
            <span className="logo__part">Web</span>Studio
          </a>
          {/* <!-- Address --> */}

          <address className="address">
            <ul className="address__list">
              <li className="address__item">
                <a
                  className="address__link--white"
                  href="https://maps.app.goo.gl/o6c2SwfCGyMQZyPA6?g_st=ic"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li className="address__item">
                <a
                  className="address__link link"
                  href="mailto:info@devstudio.com"
                >
                  info@devstudio.com
                </a>
              </li>
              <li className="address__item">
                <a className="address__link link" href="tel:+380961111111">
                  +38 096 111 11 11
                </a>
              </li>
            </ul>
          </address>
        </div>
        {/* <!-- Company social link --> */}
        <div className="socials-footer-wrapper">
          <h3 className="footer-title">приєднуйтесь</h3>
          <ul className="social">
            <li className="social__item">
              <a
                className="social__link social__link--themedark"
                href="http://instagram.com"
                aria-label="Інстаграм"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link social__link--themedark"
                href="http://twitter.com"
                aria-label="Твітер"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link social__link--themedark"
                href="http://fb.com"
                aria-label="Фейсбук"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a
                className="social__link social__link--themedark"
                href="http://linkedin.com"
                aria-label="Лінкед ін"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Subscribe section --> */}
        <div className="subscribe-news-wrapper">
          <h3 className="footer-title">Підпишіться на розсилку</h3>
          <form className="subscribe-form">
            <input
              className="subscribe-form__field"
              type="email"
              name="subscribe_mail_field"
              placeholder="E-mail"
              required
            />
            <button className="subscribe-form__button" type="submit">
              Підписатися
              <svg className="subscribe-form__icon" width="24" height="24">
                <use href="./images/sprite.svg#paperplane"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
