import React, { Fragment } from "react";
import "./App.css";
import Provider from "./context";
import Hijo from "./Components/Hijo";

function App() {
  const datos = {
    theme: "primary",
  };
  return (
    <Fragment>
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
