import React from "react";
import AppRouter from "./components/routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function JornalApp() {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}
