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
      <span></span>
      <div className="rightSide">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{distanceFromSun}</div>
        <div>{diameter}</div>
        <div>{gravity}</div>
      </div>
    </div>
  );
}

export default TabContent;
