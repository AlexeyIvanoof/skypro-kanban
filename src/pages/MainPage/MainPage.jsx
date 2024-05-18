/*import * as S from "./MainPage.stuled.js";
import { GlobalStyle } from "../../Global.styled.js";
import { useState, useEffect } from "react";

import Main from "../../components/Main/Main";
import PopBrowse from "../../modal/PopBrowse/PopBrowse.jsx";
import PopNewCard from "../../modal/PopNewCard/PopNewCard";
import PopUser from "../../modal/PopUser/PopUser";
import cardList from "../../data.js";

export function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards] = useState(cardList);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);

  
  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
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
*/