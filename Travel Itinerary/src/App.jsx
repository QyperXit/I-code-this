import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import MainSection from "./MainSection";
import Nav from "./Nav";
import data from "./data";

function App() {
  let flightInfo = data.map((item) => {
    // console.log(item);

    return <MainSection flight={item.flight} />;
  });

  return (
    <div className="container">
      <Nav />
      {flightInfo}
    </div>
  );
}

export default App;
