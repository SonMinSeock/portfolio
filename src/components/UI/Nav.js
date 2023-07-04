import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Nav.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = (event) => {
    setShowMenu((prev) => !prev);
  };
  return (
    <nav>
      <div className={classes.mobile}>
        <div>
          <span className={classes.logo}>SON</span>
          <FontAwesomeIcon
            icon={faBars}
            className={classes["hambuger-icon"]}
            onClick={onClickMenu}
          />
        </div>

        <ul className={showMenu ? classes.show__menu : classes.hide__menu}>
          <li>
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul>
      </div>
      <div className={classes.desktop}>
        <span className={classes.logo}>SON</span>
        <FontAwesomeIcon
          icon={faBars}
          className={classes["hambuger-icon"]}
          onClick={onClickMenu}
        />
        <ul>
          <li>
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#works">WORKS</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
