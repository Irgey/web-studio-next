const { default: Image } = require("next/image");

const ServiceCard = ({ src, subtitle }) => {
  return (
    <>
      {" "}
      <Image
        className="services__img"
        src={src}
        width={370}
        height={294}
        alt={subtitle}
        quality={95}
      />
      <h3 className="services__title">{subtitle}</h3>
    </>
  );
};

export default ServiceCard;
