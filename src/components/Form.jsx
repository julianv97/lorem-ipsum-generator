import React from "react";

const Form = ({ count, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount" className="capitalize">
        paragraphs:
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        min="0"
        value={count}
        className="rounded px-2 w-16 mx-4 outline-none	bg-gray-200"
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="uppercase px-2 py-1 rounded text-white bg-dark-green"
      >
        generate
      </button>
    </form>
  );
};

export default Form;
