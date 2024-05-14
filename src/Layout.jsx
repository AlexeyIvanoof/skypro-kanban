import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState, useEffect} from "react";
import cardList from './data';
import * as S from "./Layout.stuled";
import Main from './components/Main/Main';
import { GlobalStyle } from './Global.styled';
import { GetAllTasks } from './Api';
import { useUser } from './hooks/useUser';

export function Layout() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList);
  const [tracksError, setTracksError] = useState(null)

  useEffect(() => {
    async function getAllTracks() {
      try {
        setIsLoading(true) //состояние загрузки началось
        setTracksError(null)
        await GetAllTasks(user).then((cards) => {
          console.log(cards) //проверка что получаем из апи
          setCards(cards.tasks)
        }) //получение задач из апи
      } catch (error) {
        setTracksError(error.message) //если ошибка
      } finally {
        setIsLoading(false) //состояние загрузки закончилось после получения данных из апи
      }
    }
    getAllTracks()
  }, [user])

  /*function onCardAdd() {
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
  }, []);*/
  return (
    <>
    <GlobalStyle />
      <S.Wrapper>
        <Header />
        
        <Outlet /> 

        {isLoading ? (
          <div>
            <S.Loading>...Данные загружаются</S.Loading>
          </div>
        ) : (
          <Main cards={cards}
          tracksError={tracksError} />
        )} 
        </S.Wrapper>
    </>
  );
}
