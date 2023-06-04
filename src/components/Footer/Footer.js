const Footer = () => {
  return (
    <footer class="footer section">
      {/* <!-- Logo footer --> */}
      <div class="footer__container container">
        <div class="address-wrapper">
          <a class="logo logo__footer" href="./index.html">
            <span class="logo__part">Web</span>Studio
          </a>
          {/* <!-- Address --> */}

          <address class="address">
            <ul class="address__list">
              <li class="address__item">
                <a
                  class="address__link--white"
                  href="https://maps.app.goo.gl/o6c2SwfCGyMQZyPA6?g_st=ic"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li class="address__item">
                <a class="address__link link" href="mailto:info@devstudio.com">
                  info@devstudio.com
                </a>
              </li>
              <li class="address__item">
                <a class="address__link link" href="tel:+380961111111">
                  +38 096 111 11 11
                </a>
              </li>
            </ul>
          </address>
        </div>
        {/* <!-- Company social link --> */}
        <div class="socials-footer-wrapper">
          <h3 class="footer-title">приєднуйтесь</h3>
          <ul class="social">
            <li class="social__item">
              <a
                class="social__link social__link--themedark"
                href="http://instagram.com"
                aria-label="Інстаграм"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a
                class="social__link social__link--themedark"
                href="http://twitter.com"
                aria-label="Твітер"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a
                class="social__link social__link--themedark"
                href="http://fb.com"
                aria-label="Фейсбук"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="social__icon social__icon--theme-dark"
                  width="20"
                  height="20"
                >
                  <use href="./images/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a
                class="social__link social__link--themedark"
                href="http://linkedin.com"
                aria-label="Лінкед ін"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class="social__icon social__icon--theme-dark"
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
        <div class="subscribe-news-wrapper">
          <h3 class="footer-title">Підпишіться на розсилку</h3>
          <form class="subscribe-form">
            <input
              class="subscribe-form__field"
              type="email"
              name="subscribe_mail_field"
              placeholder="E-mail"
              required
            />
            <button class="subscribe-form__button" type="submit">
              Підписатися
              <svg class="subscribe-form__icon" width="24" height="24">
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
