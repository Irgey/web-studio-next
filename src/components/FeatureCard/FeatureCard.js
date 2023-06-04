const FeatureCard = ({ path, title, subtitle }) => {
  return (
    <>
      {" "}
      <div className="features__icon-wrapper">
        <svg className="features__icon" width="70" height="70">
          <use href={path}></use>
        </svg>
      </div>
      <h3 className="features__title min-title">{title}</h3>
      <p className="features__text text">{subtitle}</p>
    </>
  );
};

export default FeatureCard;
