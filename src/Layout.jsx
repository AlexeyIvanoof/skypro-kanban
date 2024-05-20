import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState, useEffect} from "react";
//import cardList from './data';
import * as S from "./Layout.stuled";
import Main from './components/Main/Main';
import { GlobalStyle } from './Global.styled';
import { GetAllTasks } from './Api';
import { useUser } from './hooks/useUser';
import { useTasks } from './hooks/useTasks';

export function Layout() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const {cards, setCards} = useTasks()
  const [tracksError, setTracksError] = useState(null)

  useEffect(() => {
        setIsLoading(true) //состояние загрузки началось
        setTracksError(null)
        GetAllTasks(user).then((data) => {
          console.log(data) //проверка что получаем из апи
          setCards(data.tasks)
        }) //получение задач из апи
       .catch ((error) => {
        setTracksError(error.message) //если ошибка
       }).finally (() => {
        setIsLoading(false) //состояние загрузки закончилось после получения данных из апи
       })
  }, [user, setCards])


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
