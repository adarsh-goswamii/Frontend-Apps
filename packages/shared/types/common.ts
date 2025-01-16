export interface RouteType {
  id: number;
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  hideHeader?: boolean;
  exact?: boolean;
};