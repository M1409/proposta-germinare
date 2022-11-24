import { Button, NavBar } from "../index";
import { SearchBar } from "./SearchBar";

export function GeneralNavBar() {
  const navItems = [
    {
      label: "Tour virtual",
      url: "",
    },
    {
      label: "Governança",
      url: "",
    },
    {
      label: "Sobre nós",
      url: "",
    },
    {
      label: "Cultura",
      url: "",
    },
    {
      label: "Carreiras",
      url: "",
    },
    {
      label: "Contato",
      url: "",
    },
    {
      CustomItem: <SearchBar />,
    },
    {
      CustomItem: <Button variant="outlined">Admissão</Button>,
    },
  ];

  return <NavBar navItems={navItems} />;
}
