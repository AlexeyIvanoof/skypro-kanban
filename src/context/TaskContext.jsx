import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  function updateTask(data) {
    setCards(data.tasks);
    navigate("/");
  }

  return (
    <TaskContext.Provider value={{ cards, setCards, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}