import NotFound from "@pages/NotFound";
import { getComponentFromRouteObject } from "@shared/utils/component";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes?.map((item) => (
        <Route
          key={item?.path}
          path={item?.path}
          element={getComponentFromRouteObject(item)}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
