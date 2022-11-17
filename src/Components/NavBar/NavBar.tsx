import style from "./NavBar.module.scss";
import { lgerminare } from "./Assets/index";
import { useEffect, useState } from "react";

type NavBar = {
  navItems: {
    label?: string;
    url?: string; //rota
    CustomItem?: React.ReactNode;
  }[];
};

export function NavBar({ navItems }: NavBar) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(()=>{console.log(openMenu)}, [openMenu])

  return (
    <div className={style.navContainer}>
      <div className={style.lineContainer}>
        <div className={style.blackLine} />
        <div className={style.blueLine} />
      </div>
      <div className={style.navItemsContainer}>
        <img src={lgerminare} style={{width: "150px"}}/>
       
        <ul className={`
          ${style.navItems}
          ${openMenu ? style.open : style.closed}
          `}>
          {navItems.map(({ label, url, CustomItem }) => {
            if (CustomItem) {
              return <li>{CustomItem}</li>;
            } else {
              return (
                <li>
                  <a href={url}>{label}</a>
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
