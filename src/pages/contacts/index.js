import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Контакти | WebStudio</title>
      </Head>{" "}
      <section className="section" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="title">Як нас знайти</h2>
        <div className="contacts__container container">
          {" "}
          <address className="address">
            <ul className="address__list">
              <li className="address__item">
                Адреса:&nbsp;
                <a
                  className="link address__link"
                  href="https://maps.app.goo.gl/o6c2SwfCGyMQZyPA6?g_st=ic"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  м. Київ, пр-т Лесі Українки, 26
                </a>
              </li>
              <li className="address__item">
                E-mail:&nbsp;
                <a
                  className="link address__link"
                  href="mailto:info@devstudio.com"
                >
                  info@devstudio.com
                </a>
              </li>
              <li className="address__item">
                Номер телефону:&nbsp;
                <a className="link address__link" href="tel:+380961111111">
                  +38 096 111 11 11
                </a>
              </li>
            </ul>
          </address>
          <iframe
            className="g-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.779451265706!2d30.53581087650109!3d50.42658067158767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2sLesi%20Ukrainky%20Blvd%2C%2026%2C%20Kyiv%2C%20Ukraina%2C%2002000!5e0!3m2!1spl!2spl!4v1685877151281!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>{" "}
      </section>
    </>
  );
};

export default Contacts;
