import ServiceCard from "@/components/ServiceCard/ServiceCard";

import FeatureCard from "@/components/FeatureCard/FeatureCard";

import TeamCard from "@/components/TeamCard/TeamCard";
import ClientCard from "@/components/ClientCard/ClientCard";
import teamMembers from "../../public/data/teamMembers";
import clients from "../../public/data/clients";
import features from "../../public/data/features";
import services from "../../public/data/services";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import { createPortal } from "react-dom";
const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Ефективні рішення для вашого бізнесу</h1>
          <button className="hero__button" type="button" onClick={toggleMenu}>
            Замовити послугу
          </button>
          {isMenuOpen &&
            createPortal(<Modal toggleMenu={toggleMenu} />, document.body)}
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
      {clients && (
        <section className="clients section">
          <div className="clients__container container">
            <h2 className="clients__title title">Постійні клієнти</h2>
            <ul className="clients__list">
              {clients.map((client) => (
                <ClientCard key={client.id} {...client} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
export default Home;
