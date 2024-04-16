import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header' 
import Main from './components/Main/Main'
import PopBrowse from './modal/PopBrowse/PopBrowse'
import PopNewCard from './modal/PopNewCard/PopNewCard'
import PopUser from './modal/PopUser/PopUser'
import cardList from './data'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);

  function onCardAdd() {
    const newCard = {
      id: cards.lenght + 1,
      title: "Название задачи ",
      date: "22.02.24",
      topic: "Web Design",
      status: "Без статуса",
    };
    setCards([...cards,  newCard]);
  }
  return (
    <div className="wrapper">
			
		<PopUser/>
	<PopNewCard/>
    <PopBrowse/>
		<Header onCardAdd={onCardAdd} />
    {isLoading ? (
          <div>
           <h1 className="Loading">...Данные загружаются</h1>
          </div>
        ) : (
          <Main cards={cards} />
        )}
		
    </div>
  )
}

export default App
