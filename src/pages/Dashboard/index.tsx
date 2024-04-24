import React, { useState } from "react";
import Router from "next/router";
import { Button } from "../../components/atoms/Button";
import { TemplateContainer } from "../../components/templates";
import { Card } from "./components/Card";

export const Dashboard = () => {
  const [counter, setCounter] = useState(0); 

  const array = [
    { id: "0", title: "Netflix", category: "streamming", cost: 39.99 },
    { id: "1", title: "Amazon", category: "streamming", cost: 9.99 },
    { id: "2", title: "Internet", category: "web", cost: 79.99 },
    { id: "3", title: "Spotify", category: "streamming", cost: 9.99 },
  ];

  const handleNavigateToAddNewExpanse = () => {
    Router.push("/dashboard/add");
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1); 
  };

  return (
    <TemplateContainer>
      <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6">
        <span className="font-bold text-2xl">Gastos Gustavo</span>

        <nav className="flex gap-4">
          <Button onClick={handleNavigateToAddNewExpanse}>
            Adicionar Nova Conta
          </Button>
          <Button variant="ghost">Sair</Button>
        </nav>
      </header>

      <main className="w-full bg-purple-50 max-w-screen-lg h-5/6 grid overflow-y-scroll content-start grid-cols-3 gap-4 p-4">
        {/* <div>
          <Button onClick={handleIncrementCounter}>
            Contador: {counter}
          </Button>
        </div> */}
        {array?.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            category={item.category}
            cost={item.cost}
          />
        ))}
      </main>
    </TemplateContainer>
  );
};
