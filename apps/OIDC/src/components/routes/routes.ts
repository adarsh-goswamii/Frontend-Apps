import { RouteType } from "@shared/types/common";
import { lazy } from "react";

const loadComponentHandler = async (dynamicImport: any) => {
  try {
    return await dynamicImport();
  } catch (error) {
    window.location.reload();
    return null;
  }
};

export default loadComponentHandler;

export const clientRoutes: RouteType[] = [
  {
    id: 1,
    path: "auth",
    exact: true,
    hideHeader: false,
    component: lazy(() =>
      loadComponentHandler(() => import("../../pages/clientLogin/index"))
    )
  },
]