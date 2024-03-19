import React from "react";
import { Home } from "./pages/home/Home";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div
      className="app"
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
