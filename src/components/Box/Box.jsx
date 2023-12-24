import "./Box.css";

function Box({ children, onClick }) {
  return <li onClick={onClick}>{children}</li>;
}

export default Box;
