import React, { Fragment } from "react";
import "./App.css";
import Provider from "./context";
import Hijo from "./Components/Hijo";
import { create } from "./Services";
import List from "./Components/list";

function App() {
  create("cristian", "developer")
    .then((response) => {
      console.log("Result create", response?.data);
    })
    .catch((e) => {
      console.log("Error create", { ...e });
    });
  const datos = {
    theme: "primary",
  };
  return (
    <Fragment>
      <List></List>
      Ejemplo flujo de datos normal
      <div className="App" style={{ background: "red", padding: "30px" }}>
        Padre {datos.theme}
        <Hijo theme={datos.theme} />
      </div>
      Ejemplo con Api Context
      <Provider>
        <div className="App" style={{ background: "red", padding: "30px" }}>
          Padre {datos.theme}
          <Hijo />
        </div>
      </Provider>
    </Fragment>
  );
}

export default App;
