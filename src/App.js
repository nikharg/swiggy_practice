import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};
root.render(<App />);

export default App;
