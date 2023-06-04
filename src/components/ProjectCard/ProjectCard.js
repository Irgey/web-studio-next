const { default: Image } = require("next/image");

const ProjectCard = ({ title, subtitle, type, link, image }) => {
  return (
    <li className="product__item">
      <a
        className="product__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="product-thumb">
          <Image
            src={image}
            alt={`${type}, ${title}`}
            width={450}
            height={294}
            quality={95}
          />
          <div className="product-box-text-hidden">
            <p className="box-text">{subtitle}</p>
          </div>
        </div>
        <div className="product__wrapper">
          <h2 className="product__title">{title}</h2>
          <p className="product__category">{type}</p>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;
