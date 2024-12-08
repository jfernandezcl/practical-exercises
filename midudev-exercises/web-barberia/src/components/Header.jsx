import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div></div>
      <div className="h-container-list">
        <ul>
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#perfil">PERFIL</a>
          </li>
          <li>
            <a href="#productos">PRODUCTOS</a>
          </li>
          <li>
            <a href="#contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
