function Box({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Box;
