import React, { Component, createContext, useContext, Fragment } from "react";
import "./App.css";

const appContext = createContext({
  theme: "",
});

function App() {
  const datos = {
    theme: "primary",
  };
  return (
    <Fragment>
      Ejemplo flujo de datos normal
      <div className="App" style={{ background: "red", padding: "30px" }}>
        Padre {datos.theme}
        <Header theme={datos.theme} />
      </div>
      Ejemplo con Api Context
      <appContext.Provider value={datos}>
        <div className="App" style={{ background: "red", padding: "30px" }}>
          Padre {datos.theme}
          <Header />
        </div>
      </appContext.Provider>
    </Fragment>
  );
}

function Header(props: any) {
  const contex = useContext(appContext);
  return (
    <div style={{ background: "blue", padding: "30px", color: "white" }}>
      Hijo {props.theme ? props.theme : contex.theme}
      <Container theme={props.theme} />
    </div>
  );
}

function Container(props: any) {
  return (
    <div style={{ background: "yellow", padding: "30px", color: "black" }}>
      Nieto {props.theme}
      <Container2 theme={props.theme} />
    </div>
  );
}

function Container2(props: any) {
  return (
    <div style={{ background: "green", padding: "30px", color: "black" }}>
      Nieto2 {props.theme}
    </div>
  );
}

export default App;
