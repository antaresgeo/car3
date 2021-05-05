import React from "react";
import List from "./Components/list";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
