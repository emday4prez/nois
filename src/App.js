import React from "react";
import "./App.scss";

import CardFlip from "./components/card-flip/cardFlip";
import Credits from "./components/credits/credits";

const App = () => {
  return (
    <div>
      <CardFlip />
      <Credits />
    </div>
  );
};

export default App;
