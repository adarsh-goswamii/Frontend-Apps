import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import { Route, Routes } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
