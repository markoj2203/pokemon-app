import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
