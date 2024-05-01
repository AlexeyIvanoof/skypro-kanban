import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState, useEffect} from "react";
import cardList from './data';
import * as S from "./Layout.stuled";
import Main from './components/Main/Main';
import { GlobalStyle } from './Global.styled';

export function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);

  function onCardAdd() {
    const newCard = {
      id: cards.lenght + 1,
      title: "Название задачи ",
      date: "22.02.24",
      topic: "Web Design",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);
  return (
    <>
    <GlobalStyle />
      <S.Wrapper>
        <Header onCardAdd={onCardAdd} />
        
        <Outlet /> 

        {isLoading ? (
          <div>
            <S.Loading>...Данные загружаются</S.Loading>
          </div>
        ) : (
          <Main cards={cards} />
        )} 
        </S.Wrapper>
    </>
  );
}
