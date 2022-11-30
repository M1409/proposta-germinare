import { Button } from "../index";
import { SearchBar, NavBar, NavBarProps } from "./index";
import { useNavigate } from "react-router-dom";

export function GeneralNavBar({...props}: Omit<NavBarProps, "navItems">) {
  const navigate = useNavigate()
  const navItems = [
    {
      label: "Tour virtual",
      url: "/tour",
    },
    {
      label: "Governança",
      url: "/home/governança",
    },
    {
      label: "Sobre nós",
      url: "/home/sobre-nós",
    },
    {
      label: "Acadêmico",
      url: "/home/acadêmico",
    },
    {
      label: "Contato",
      url: "",
    },
    {
      label: "Notícias",
      url: "/notícias"
    },
    {
      CustomItem: <SearchBar />,
      closeOnClick: false
    },
    {
      CustomItem: <Button variant="outlined" onClick={()=>{
        navigate('/home/admissão')
      }}>Admissão</Button>,
    },
  ];

  return <NavBar {...props} navItems={navItems} />;
}
