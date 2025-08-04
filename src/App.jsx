import React, { useState } from "react";
import TopPage from "./Components/TopPage";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  const [Term, setTerm] = useState("");

  const termclick = (term) => {
    setTerm((prevTerm) => (prevTerm === term ? "" : term));
  };

  return (
    <div className="bg-black">
      <TopPage termclick={termclick} />
      <Main techTerm={Term} />
      <Footer />
    </div>
  );
};

export default App;
