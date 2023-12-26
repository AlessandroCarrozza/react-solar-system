import "./TabContent.css";

function TabContent({
  name,
  title,
  description,
  image,
  distanceFromSun,
  diameter,
  gravity,
}) {
  return (
    <div id="tabContent">
      <div className="leftSide">
        <img src={image} alt="Planet" className={name} />
      </div>
      <span id="divider"></span>
      <div className="rightSide">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <span>Distance from sun: </span>
          {distanceFromSun}
        </div>
        <div>
          <span>Diameter: </span>
          {diameter}
        </div>
        <div>
          <span>Gravity: </span>
          {gravity}
        </div>
      </div>
    </div>
  );
}

export default TabContent;
