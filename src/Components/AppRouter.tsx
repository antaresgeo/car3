import React, { FC, ReactElement } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";

interface OwnProps {
  routes?: AppRouteItf[];
  menu?: ReactElement;
}

const AppRouter: FC<OwnProps> = ({ routes, menu, children }) => {
  return (
    <BrowserRouter>
      {menu && menu}
      <Switch>
        {routes &&
          routes.map((route, index) => {
            return <AppRoute key={`route_global_${index}`} {...route} />;
          })}
        {children && children}
      </Switch>
    </BrowserRouter>
  );
};

export interface AppRouteItf extends RouteProps {
  redirect?: string;
  is_private?: boolean;
  guard?: () => boolean;
}

const AppRoute: FC<OwnProps> = (route: AppRouteItf) => {
  const { component, render, ...axu_route } = route;
  let can_access = false;
  if (route.is_private) {
    can_access = route.guard ? route.guard() : false;
  }
  const Component = component;
  const defaultRedirect = <Redirect to={"/"} />;

  return (
    <Route
      {...axu_route}
      render={(props) => {
        if (route.redirect) {
          return <Redirect to={route.redirect} />;
        } else if (route.is_private && can_access) {
          return Component ? <Component {...props} /> : defaultRedirect;
        } else if (!route.is_private) {
          return Component ? <Component {...props} /> : defaultRedirect;
        } else {
          return defaultRedirect;
        }
      }}
    />
  );
};

export default AppRouter;
