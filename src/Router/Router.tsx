import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GeneralRouteWrapper } from "../Components";
import { LazyLoading } from "../Pages";
import { routes } from "./routes";

const Admission = lazy(() =>
  import("../Pages").then(({ Admission }) => ({ default: Admission }))
);
const VirtualTour = lazy(() =>
  import("../Pages").then(({ VirtualTour }) => ({
    default: VirtualTour,
  }))
);
const Home = lazy(() =>
  import("../Pages").then(({ Home }) => ({ default: Home }))
);
const Academic = lazy(() =>
  import("../Pages").then(({ Academic }) => ({ default: Academic }))
);
const News = lazy(() =>
  import("../Pages").then(({ News }) => ({ default: News }))
);
const Governance = lazy(() =>
  import("../Pages").then(({ Governance }) => ({ default: Governance }))
);
const AboutUs = lazy(() =>
  import("../Pages").then(({ AboutUs }) => ({ default: AboutUs }))
);
const Error404 = lazy(() =>
  import("../Pages").then(({ Error404 }) => ({ default: Error404 }))
);

export function Router() {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path={routes.home}>
          <Route element={<GeneralRouteWrapper />}>
            <Route index element={<Home />} />
            <Route path={routes.academic} element={<Academic />} />
            <Route path={routes.admission} element={<Admission />} />
            <Route path={routes.governance} element={<Governance />} />
            <Route path={routes.news} element={<News />} />
            <Route path={routes.aboutUs} element={<AboutUs />} />
          </Route>
          <Route path={routes.virtualTour} element={<VirtualTour />} />
        </Route>
        <Route path="/" element={<Navigate to={routes.home} />} />
        <Route element={<GeneralRouteWrapper/>}>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
