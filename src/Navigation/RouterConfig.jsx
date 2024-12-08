
import { Routes, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import ModerateRoute from "./Auth/ModerateRoute";
import { INITIAL_VALUE } from "./DataRouteConfig";

export const RouterConfig = () => {
  return (
    <Routes>
      {INITIAL_VALUE.map((route, index) => {
        if (route.route === "PublicRoute") {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PublicRoute>{route.page}</PublicRoute>}
            />
          );
        }
        if (route.route === "ModerateRoute") {
          return (
            <Route
              key={index}
              path={route.path}
              element={<ModerateRoute>{route.page}</ModerateRoute>}
            />
          );
        }
        return (
          <Route
            key={index}
            path={route.path}
            element={<PrivateRoute>{route.page}</PrivateRoute>}
          />
        );
      })}
      <Route path={PATH.NO_PAGE} element={<WEB_PAGES.NO_PAGE />} />
      <Route path="*" element={<WEB_PAGES.NO_PAGE />} />
    </Routes>
  );
};