const Portfolio = () => {
  return (
    <>
      {/* <!-- Projects section --> */}
      <section class="product section">
        <div class="container">
          <h1 class="visually-hidden">Проєкти</h1>
          <ul class="categories">
            <li class="categories__item">
              <button type="button" class="button categories__button current">
                Усі
              </button>
            </li>
            <li class="categories__item">
              <button type="button" class="button categories__button">
                Веб-сайти
              </button>
            </li>
            <li class="categories__item">
              <button type="button" class="button categories__button">
                Додатки
              </button>
            </li>
            <li class="categories__item">
              <button type="button" class="button categories__button">
                Дизайн
              </button>
            </li>
            <li class="categories__item">
              <button type="button" class="button categories__button">
                Маркетинг
              </button>
            </li>
          </ul>
          {/* <!-- Products --> */}
          <ul class="product__list">
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img.png    1x,
                        ./images/desktop/projects/img@2x.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img.png    1x,
                        ./images/tablet/projects/img@2x.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img.png    1x,
                        ./images/mobile/projects/img@2x.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img.png"
                      alt="Проєкт Технокряк"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>
                <div class="product__wrapper">
                  <h2 class="product__title">Технокряк</h2>
                  <p class="product__category">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-1.png    1x,
                        ./images/desktop/projects/img@2x-1.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-1.png    1x,
                        ./images/tablet/projects/img@2x-1.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-1.png    1x,
                        ./images/mobile/projects/img@2x-1.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-1.png"
                      alt="Постер New Orlean vs Golden Star"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">
                    Постер New Orlean vs Golden Star
                  </h2>
                  <p class="product__category">Дизайн</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-2.png    1x,
                        ./images/desktop/projects/img@2x-2.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-2.png    1x,
                        ./images/tablet/projects/img@2x-2.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-2.png    1x,
                        ./images/mobile/projects/img@2x-2.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-2.png"
                      alt="Ресторан Seafood"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Ресторан Seafood</h2>
                  <p class="product__category">Додаток</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-3.png    1x,
                        ./images/desktop/projects/img@2x-3.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-3.png    1x,
                        ./images/tablet/projects/img@2x-3.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-3.png    1x,
                        ./images/mobile/projects/img@2x-3.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-3.png"
                      alt="Проєкт Prime"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Проєкт Prime</h2>
                  <p class="product__category">Маркетинг</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-4.png    1x,
                        ./images/desktop/projects/img@2x-4.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-4.png    1x,
                        ./images/tablet/projects/img@2x-4.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-4.png    1x,
                        ./images/mobile/projects/img@2x-4.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-4.png"
                      alt="Проєкт Boxes"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Проєкт Boxes</h2>
                  <p class="product__category">Додаток</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-5.png    1x,
                        ./images/desktop/projects/img@2x-5.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-5.png    1x,
                        ./images/tablet/projects/img@2x-5.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-5.png    1x,
                        ./images/mobile/projects/img@2x-5.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-5.png"
                      alt="Проєкт Inspiration has no Borders"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Inspiration has no Borders</h2>
                  <p class="product__category">Веб-сайт</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-6.png    1x,
                        ./images/desktop/projects/img@2x-6.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-6.png    1x,
                        ./images/tablet/projects/img@2x-6.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-6.png    1x,
                        ./images/mobile/projects/img@2x-6.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-6.png"
                      alt="Видання Limited Edition"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Видання Limited Edition</h2>
                  <p class="product__category">Дизайн</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-7.png    1x,
                        ./images/desktop/projects/img@2x-7.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-7.png    1x,
                        ./images/tablet/projects/img@2x-7.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-7.png    1x,
                        ./images/mobile/projects/img@2x-7.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-7.png"
                      alt="Проєкт LAB"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Проєкт LAB</h2>
                  <p class="product__category">Маркетинг</p>
                </div>
              </a>
            </li>
            <li class="product__item">
              <a
                class="product__link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="product-thumb">
                  <picture>
                    {/*<!-- Desktop screen -->*/}
                    <source
                      media="(min-width: 1200px)"
                      srcset="
                        ./images/desktop/projects/img-8.png    1x,
                        ./images/desktop/projects/img@2x-8.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Tablet screen -->*/}
                    <source
                      media="(min-width: 768px)"
                      srcset="
                        ./images/tablet/projects/img-8.png    1x,
                        ./images/tablet/projects/img@2x-8.png 2x
                      "
                      type="image/png"
                    />
                    {/*<!-- Mobile screen -->*/}
                    <source
                      media="(max-width: 767px)"
                      srcset="
                        ./images/mobile/projects/img-8.png    1x,
                        ./images/mobile/projects/img@2x-8.png 2x
                      "
                      type="image/png"
                    />
                    <img
                      class="product__img"
                      src="./images/mobile/projects/img-8.png"
                      alt="Проєкт Growing Busines"
                      loading="lazy"
                    />
                  </picture>
                  <div class="product-box-text-hidden">
                    <p class="box-text">
                      Ресурс пропонує комплексні пропозиції з різним рівнем
                      функціоналу та сервісів. Все це дозволить відвідувачу
                      отримати вичерпні відомості про компанію чи приватну
                      особу.
                    </p>
                  </div>
                </div>

                <div class="product__wrapper">
                  <h2 class="product__title">Growing Business</h2>
                  <p class="product__category">Додаток</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
