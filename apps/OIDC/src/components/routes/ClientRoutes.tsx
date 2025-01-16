import NotFound from "@pages/NotFound";
import { getComponentFromRouteObject } from "@shared/utils/index";
import { Route, Routes } from "react-router-dom";
import { clientRoutes } from "./routes";

const ClientRoutes = () => {

  return (
    <Routes>
      {clientRoutes?.map((item) => (
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

export default ClientRoutes;
