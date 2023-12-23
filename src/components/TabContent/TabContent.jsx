function TabContent({ name, title, description, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt="Planet" />
    </div>
  );
}

export default TabContent;
