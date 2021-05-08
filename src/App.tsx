import React from "react";
import List from "./Components/list";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Hijo from "./Components/Hijo";
import AppRouter, { AppRouteItf } from "./Components/AppRouter";

function App() {
  const menu = (
    <ul>
      <li>
        <Link to="/list/">Lista de Usuarios</Link>
      </li>
      <li>
        <Link to={{ pathname: "/hijo/5/", state: { hola: 2 } }}>
          Ejemplo de componente hijo
        </Link>
      </li>
    </ul>
  );
  // const routes: AppRouteItf[] = [
  //   { exact: true, path: "/list/", component: List },
  //   { exact: true, path: "/hijo/:id/", component: Hijo, is_private: true, guard: () => true },
  //   { redirect: "/list/", path: "**" },
  // ];
  return (
    <Provider store={store}>
      {/*<AppRouter routes={routes} menu={menu} />*/}
      <BrowserRouter>
        {menu}
        <Switch>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/hijo/:id/" component={Hijo} />
          <Redirect to="/list/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
