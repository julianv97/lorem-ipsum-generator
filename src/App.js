import React, { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    /* CASOS:
    count = 0
    count < 0 
    count > text.length
    desarrollar un modal para estos casos
    */
  };

  return (
    <section className=" w-full flex flex-col items-center justify-center">
      <h1 className="uppercase">tired of bored lorem ipsum?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="uppercase">
          generate
        </button>
      </form>
      <article>
        {text.map((paragraph, index) => {
          return <p key={index}> {paragraph} </p>;
        })}
      </article>
    </section>
  );
}

export default App;
