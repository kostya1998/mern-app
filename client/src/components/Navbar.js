import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
  };

  return (
    <nav>
      <div
        className="nav-wrapper blue-grey darken-4"
        style={{ paddingLeft: "2rem" }}
      >
        <span className="brand-logo">
          <span className="green-text text-accent-2">M</span>.
          <span className="red-text text-lighten-2">E</span>.
          <span className="light-blue-text text-lighten-2">R</span>.
          <span className="light-green-text text-lighten-2">N</span>.
        </span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Cсылки</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
