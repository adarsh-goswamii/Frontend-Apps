import AppRoute from "@atoms/route/Route";
import AdminRoutes from "@components/routes/AdminRoutes";
import ClientRoutes from "@components/routes/ClientRoutes";
import PublicRoutes from "@components/routes/PublicRoutes";
import NotFound from "@pages/NotFound";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const checkAuth = () => true;

  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <AppRoute checkAuth={checkAuth} location={location}>
            <AdminRoutes />
          </AppRoute>
        }
      />
      <Route
        path="/client/*"
        element={
          <AppRoute checkAuth={checkAuth} location={location}>
            <ClientRoutes />
          </AppRoute>
        }
      />
      <Route
        path="/*"
        element={
          <AppRoute checkAuth={checkAuth} location={location}>
            <PublicRoutes />
          </AppRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
