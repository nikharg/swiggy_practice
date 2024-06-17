import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};
root.render(<App />);

export default App;
