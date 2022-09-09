import React from "react";

export type BlueCardProps = {
  header_first_word: string;
  header_second_word: string;
  description: JSX.Element | string;
  buttonName: string;
  buttonAction: () => void;
};
const BlueCard: React.FC<BlueCardProps> = (p) => (
  <div className="asap-condensed inline-flex flex-col bg-indigo-600 rounded-2xl p-7 m-2 md:m-3 w-11/12 md:my-0 md:w-1/4">
    <p className="text-2xl md:text-4xl">
      {p.header_first_word} <br />
      {p.header_second_word}
    </p>
    <p className="md:text-2xl mt-2 md:mt-5 md:mb-2">{p.description}</p>
    <button
      className="underline inline text-left mt-auto md:text-xl"
      onClick={p.buttonAction}
    >
      {p.buttonName}
    </button>
  </div>
);

export default BlueCard;
