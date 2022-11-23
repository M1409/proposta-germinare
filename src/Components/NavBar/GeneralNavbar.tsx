import { Button, NavBar } from "../index";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
export function GeneralNavBar() {
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
      CustomItem: <Button variant="outlined" onClick={()=>{
        navigate('/home/admissão')
      }}>Admissão</Button>,
    },
  ];

  return <NavBar navItems={navItems} />;
}
