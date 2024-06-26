import tw from "tailwind-styled-components";
import { Button } from "../../../../components/atoms/Button";
import React, { useState } from "react";

export const Card = ({ title, category, cost }) => {

  const [counter, setCounter] = useState(0);
  const handleIncrementCounter = () => {
    setCounter(counter + 1); 
  };

  return (
    <CardContainer>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="px-4 h-8 flex items-center justify-center text-purple-900 bg-purple-100 rounded-full self-start">
        {category}
      </p>
      <p className="font-medium">{cost}</p>
      <footer className="w-full flex justify-between">
        <Button variant="ghost">Editar</Button>
        <Button variant="ghost">Excluir</Button>
      </footer>
      <div>
          <Button onClick={handleIncrementCounter}>
            Contador: {counter}
          </Button>
        </div>
    </CardContainer>
  );
};

export const CardContainer = tw.article`
  bg-white p-4 shadow-md relative flex justify-between flex-col gap-4
`;
