import Image from "next/image";
import services from "@/data/services";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import features from "@/data/features";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import { teamMembers } from "@/data/teamMembers";
import TeamCard from "@/components/TeamCard/TeamCard";
const Home = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Ефективні рішення для вашого бізнесу</h1>
          <button className="hero__button" type="button" data-modal-open>
            Замовити послугу
          </button>
        </div>
      </section>
      {/* <!-- Features section --> */}
      {features && (
        <section className="features section">
          <div className="features__container container">
            <h2 className="visually-hidden">НАШІ ПЕРЕВАГИ</h2>

            <ul className="features__list">
              {features.map((feature) => (
                <li className="features__item" key={feature.id}>
                  <FeatureCard {...feature} />{" "}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* <!-- Services section --> */}
      {services && (
        <section className="services section">
          <div className="services__container container">
            <h2 className="title">Чим ми займаємося</h2>
            <ul className="services__list">
              {services.map((service) => (
                <li className="services__item" key={service.id}>
                  <ServiceCard {...service} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* <!-- Team section --> */}
      {teamMembers && (
        <section className="team section">
          <div className="team__container container">
            <h2 className="team__title title">Наша команда</h2>
            <ul className="team__list">
              {" "}
              {teamMembers.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* <!-- Clients section --> */}
      <section className="clients section">
        <div className="clients__container container">
          <h2 className="clients__title title">Постійні клієнти</h2>
          <ul className="clients__list">
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="41" height="47">
                  <use href="./images/sprite.svg#icon-group"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="40" height="52">
                  <use href="./images/sprite.svg#icon-group-1"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="43" height="41">
                  <use href="./images/sprite.svg#icon-group-2"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="84" height="42">
                  <use href="./images/sprite.svg#icon-group-3"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="62" height="45">
                  <use href="./images/sprite.svg#icon-group-4"></use>
                </svg>
              </a>
            </li>
            <li className="clients__item">
              <a className="clients__link" href="">
                <svg className="clients__icon" width="94" height="44">
                  <use href="./images/sprite.svg#icon-group-5"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Home;
