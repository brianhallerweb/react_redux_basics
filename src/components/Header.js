import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Todos and Counter App
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" activeClassName="is-active">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" activeClassName="is-active">
            Counter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
