interface RouteAttributesInterface {
  path: String;
  name: String;
}

export enum AppRoutes {
  home = "/",
  login = "/loginn",
}

const routes: RouteAttributesInterface[] = [
  {
    path: AppRoutes.home,
    name: "appRoutes.home",
  },
  {
    path: AppRoutes.login,
    name: "appRoutes.login",
  },
];

export default routes;
