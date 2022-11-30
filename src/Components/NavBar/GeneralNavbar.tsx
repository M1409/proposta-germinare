import { Button } from "../index";
import { SearchBar, NavBar, NavBarProps } from "./index";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router";

export function GeneralNavBar({...props}: Omit<NavBarProps, "navItems">) {
  const navigate = useNavigate()
  const navItems = [
    {
      label: "Tour virtual",
      url: routes.virtualTour,
    },
    {
      label: "Governança",
      url: routes.governance,
    },
    {
      label: "Sobre nós",
      url: routes.aboutUs,
    },
    {
      label: "Acadêmico",
      url: routes.academic,
    },
    {
      label: "Notícias",
      url: routes.news
    },
    {
      CustomItem: <SearchBar />,
    },
    {
      CustomItem: <Button variant="outlined" onClick={()=>{
        navigate(routes.admission)
      }}>Admissão</Button>,
    },
  ];

  return <NavBar {...props} navItems={navItems} />;
}
