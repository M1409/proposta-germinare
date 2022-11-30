import { Outlet } from "react-router-dom";
import { Footer, GeneralNavBar } from "../../Components";

export function GeneralRouteWrapper() {
    return (
      <>
        <GeneralNavBar />
        <Outlet />
        <Footer />
      </>
    );
  }