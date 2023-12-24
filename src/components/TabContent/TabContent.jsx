import "./TabContent.css";

function TabContent({ name, title, description, image }) {
  return (
    <div id="tabContent">
      <div className="leftSide">
        <img src={image} alt="Planet" />
      </div>
      <div className="rightSide">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TabContent;
