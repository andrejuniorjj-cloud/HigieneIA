import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // importa o tailwind

const App = () => {
  return <h1 className="text-3xl font-bold text-blue-600">HigieneIA funcionando!</h1>;
};

createRoot(document.getElementById("root")!).render(<App />);
