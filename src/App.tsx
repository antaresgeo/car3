import React, { Fragment } from "react";
import axios from "axios";
import "./App.css";
import Provider from "./context";
import Hijo from "./Components/Hijo";

// https://reqres.in/api/users ?page=2

const list = (pagina: number = 1) =>
  axios.get("https://reqres.in/api/users", { params: { page: pagina } });

const create = (name: string, job: string) =>
  axios.post("https://reqres.in/api/users", { name, job });

function App() {
  list(2)
    .then((response) => {
      console.log("Result", response?.data?.data);
    })
    .catch((e) => {
      console.log("Error", { ...e });
    });

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
