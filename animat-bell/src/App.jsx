import { useState } from "react";

import "./App.css";
import Bell from "./Bell";

function App() {
  const [count, setCount] = useState(0);

  return <Bell />;
}

export default App;
