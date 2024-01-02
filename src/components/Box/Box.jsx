import "./Box.css";

function Box({ name, onClick, isActive }) {
  return (
    <li className={isActive ? "isActive" : undefined} onClick={onClick}>
      {name}
    </li>
  );
}

export default Box;
