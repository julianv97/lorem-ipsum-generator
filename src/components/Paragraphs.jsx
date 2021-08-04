import React from "react";

const Paragraphs = ({ text }) => {
  return (
    <article className=" bg-mint-green flex flex-col justify-center">
      {text.map((paragraph, index) => {
        return (
          <p className="py-4 px-20 md:px-32 lg:px-80 text-center" key={index}>
            {paragraph}
          </p>
        );
      })}
    </article>
  );
};

export default Paragraphs;
