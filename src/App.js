import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Paragraphs from "./components/Paragraphs";
import ClearButton from "./components/ClearButton";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState("");

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (amount === 0) {
      setText([]);
    }
    if ((amount > 0 && amount < data.length) || amount > data.length) {
      setText(data.slice(0, amount));
    }
    if (amount < 0) {
      setCount(0);
      setText([]);
    }
    setCount(0);
  };

  const clearAll = () => {
    setText([]);
    setCount(0);
  };

  return (
    <section className="h-screen w-full flex flex-col items-center pt-10   bg-mint-green">
      <Title />

      <Form
        count={count}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <Paragraphs text={text} />

      {text.length > 0 && <ClearButton clearAll={clearAll} />}
    </section>
  );
}

export default App;
