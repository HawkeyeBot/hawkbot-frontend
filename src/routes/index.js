import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// components
import LoadingScreen from "../components/LoadingScreen";
import ErrorNotification from "src/components/alerts/ErrorNotification";
import { useRecoilValue } from "recoil";
import { errorAtom } from "src/recoil/atoms";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useRecoilValue(errorAtom);

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes("/operating")} />}>
      {error && <ErrorNotification message={error?.message} />}

      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/operating/overview" replace />, index: true },
        { path: "/operating", element: <Navigate to="/operating" replace />, index: true },
        { path: "/operating/overview", element: <Overview /> },
        // { path: "/operating/logs", element: <Logs /> },
        // { path: "/operating/controls", element: <Controls /> },
      ],
    },
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const Overview = Loadable(lazy(() => import("../pages/Overview")));
// const Logs = Loadable(lazy(() => import("../pages/Logs")));
// const Controls = Loadable(lazy(() => import("../pages/Controls")));

// Special pages
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
