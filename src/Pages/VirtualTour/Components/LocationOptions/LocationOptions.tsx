import { Button } from "../../../../Components";
import { useState } from "react";
import style from "./LocationOptions.module.scss";

export type Location = {
  location: string;
  src: string;
};

export type LocationOptions = {
  locations: Location[];
  setCurrentLocation: (location: Location) => void;
};

export function LocationOptions({
  locations,
  setCurrentLocation,
}: LocationOptions) {
  const [openMenu, setOpenMenu] = useState(false);

  const setSelected = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Array.from(
      document.querySelector(`.${style.optionsMenu}`)!.children
    ).forEach((el) => el.classList.remove(style.selected));

    const button = e.target as HTMLButtonElement;
    button.parentElement!.classList.add(style.selected);
  };

  return (
    <div className={style.menuOptionsContainer}>
      <Button onClick={() => setOpenMenu((prev) => !prev)}>Áreas comuns</Button>
      <ul className={`${style.optionsMenu} ${openMenu ? style.open : ""}`}>
        {locations.map(({ location, src }, index) => {
          return (
            <li key={location} className={index === 0 ? style.selected : ""}>
              <button
                onClick={(e) => {
                  setSelected(e);
                  setCurrentLocation({ location, src });
                  setOpenMenu(false);
                }}
              >
                {location}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
