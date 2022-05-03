import React from "react";
import style from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>Mops</div>
      <div>
        <ul>
          <li className={style.current}>Main</li>
          <li>Portfolio</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
