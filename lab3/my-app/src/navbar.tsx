import { Link } from "react-router-dom";
import { themes } from "./themeContext"

export const Navbar = () => {
  return (
	<div>
  	<nav style={{ display: "flex", justifyContent: "space-around", background: themes.light.background}}>
      <Link to="/">Home</Link>
      <Link to="/todolist/ABC">ABC To Do List</Link>
      <Link to="/todolist/DEF">DEF To Do List</Link>
  	</nav>
	</div>
  );
};