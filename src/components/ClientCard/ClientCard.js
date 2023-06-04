const ClientCard = ({ svg: { path, width, height }, link, name }) => {
  return (
    <li className="clients__item">
      <a className="clients__link" href={link} aria-label={name}>
        <svg className="clients__icon" width={width} height={height}>
          <use href={path}></use>
        </svg>
      </a>
    </li>
  );
};

export default ClientCard;
