import React, {FC} from "react";
import Router from "./Router";
import { Header } from "./components/Header/index";
import "./styles/App.scss";

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Router />
      </main>
    </>
  );
};

export default App;
