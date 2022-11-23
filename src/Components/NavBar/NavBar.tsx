import style from "./NavBar.module.scss";
import { lgerminare } from "./Assets/index";
import { useState } from "react";
import {Link} from 'react-router-dom'
type NavBar = {
  navItems: {
    label?: string;
    url?: string; //rota
    CustomItem?: React.ReactNode;
  }[];
  hamburguerMenu?: boolean;
};

export function NavBar({ navItems, hamburguerMenu = true }: NavBar) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={style.navContainer}>
      <div className={style.lineContainer}>
        <div className={style.blackLine} />
        <div className={style.blueLine} />
      </div>
      <div className={`${style.navItemsContainer} ${hamburguerMenu ? style.hamburguerMenu : ''}`}>
        <Link to='/' ><img src={lgerminare} style={{ width: "150px" }} /></Link>

        <ul
          className={`
          ${style.navItems}
          ${openMenu ? style.open : style.closed}
          `}
        >
          {navItems.map(({ label, url, CustomItem }, index) => {
            if (CustomItem) {
              return <li key={index}>{CustomItem}</li>;
            } else {
              return (
                <li key={index}>
                  <Link to={`${url}`}>{label}</Link>
                </li>
              );
            }
          })}
        </ul>
        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          className={`
          ${style.hamburguer}
          ${openMenu ? style.open : style.closed}
        `}
        >
          <div />
          <div />
          <div />
        </button>
      </div>
    </div>
  );
}
