import React, { Suspense } from "react";
import { RouteType } from "../types";

export const getComponentFromRouteObject = (
  route: RouteType,
  fallback: React.ReactNode = <></>
): React.ReactNode => {
  const Component = route.component;

  if (Component.$$typeof === Symbol.for("react.lazy"))
    return (
      <Suspense fallback={fallback}>
        <Component />
      </Suspense>
    );
  return <Component />;
};
