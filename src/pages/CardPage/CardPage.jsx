import Calendar from "../../components/Calendar/Calendar";
import * as S from "./CardPage.stuled"
import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { DeleteTask } from "../../Api";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { EditTask } from "../../Api";
import { topicName } from "../../ColorStyles/topic";

export function CardPage() {
   const {user} = useUser();
   const { id } = useParams();
   const [date, setDate] = useState(new Date());
   const { cards, setCards} = useTasks();
   const navigate = useNavigate();
   const currentCard = cards.find((element) => id === element._id);
   const [cardPage, setCardPage] = useState(true);
   const [error, setError] = useState(null);
   const [inputValue, setInputValue] = useState({
    title: currentCard.title,
    description: currentCard.description,
    topic: currentCard.topic,
    date: currentCard.date,
    status: currentCard.status,
  });

  const NewEditTask = async () => {
    const title = !inputValue.title ? "Новая задача": inputValue.title;
    const topic = !inputValue.topic ? "Research": inputValue.topic;
    const status = !inputValue.status ? "Без статуса": inputValue.status;
    const newCard = {
      description: inputValue.description,
      title,
      topic,
      status,
      date,
    };
  
    EditTask({id: currentCard._id, user, newCard})
      .then((data) =>{
          setCards(data.tasks)
          navigate("/");
      }) .catch ((currentError) => {
          setError(currentError.message);
          console.log(error);
        })
    }; 

    const onChangeInput = (e) => {
        const {value, name} = e.target
        setInputValue({...inputValue, [name]: value})
    }

   const handleDeleteClick = (e)=> {
    e.preventDefault();

    DeleteTask({id: currentCard._id, user})
     .then((data) => {
      setCards(data.tasks);
      navigate("/");
     })
     .catch((err) => {
      console.log(err.message)
     })
    }

    const handleSetCardPage = () => {
        setCardPage(false);
      };

      const handleCardPage = () => {
        setCardPage(true);
      };

    return (
        <S.PopBrowse>
        <S.PopBrowseContainer>
            <S.PopBrowseBlock>
                <S.PopBrowseContent>
                    <S.PopBrowseTopBlock>
                        <S.PopBrowseTtl>{currentCard.title}</S.PopBrowseTtl>
                        <S.CategoriesTheme $themeColor={topicName[inputValue.topic]}>
                            <S.ThemesP>{currentCard.topic}</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.PopBrowseTopBlock>
                    {cardPage ?(
                    <><div>
                                <S.StatusSubttl>Статус</S.StatusSubttl>
                                <S.StatusThemes>
                                    <S.Theme>
                                        <S.ThemeP>{currentCard.status}</S.ThemeP>
                                    </S.Theme>
                                </S.StatusThemes>
                            </div>
                            <S.PopBrowseWrap>
                                    <S.PopBrowseForm id="formBrowseCard" action="#">
                                        <S.FormBrowseBlock>
                                            <S.LabelSubttl htmlFor="textArea01">Описание задачи</S.LabelSubttl>
                                            <S.FormBrowseArea
                                                name="description"
                                                id="textArea"
                                                //placeholder={currentCard.description}
                                                value={currentCard.description}
                                            ></S.FormBrowseArea>
                                        </S.FormBrowseBlock>
                                    </S.PopBrowseForm>
                                    <Calendar selected={currentCard.date} />
                                </S.PopBrowseWrap>
                                </>
                    ):(
                        <><div>
                                    <S.StatusSubttl>Статус</S.StatusSubttl>
                                    <S.StatusThemes>
                                    <label> 
                                    <S.StatusThemesInput
                                                type="radio"
                                                name="status"
                                                value="Без статуса"
                                                onChange={(e) => setInputValue({ ...inputValue, status: e.target.value })} />
                                        <S.StatusTheme>
                                            <S.StatusThemeP htmlFor="radio1">Без статуса</S.StatusThemeP>
                                        </S.StatusTheme>
                                        </label>

                                        <label>
                                        <S.StatusThemesInput
                                                type="radio"
                                                name="status"
                                                value="Нужно сделать"
                                                onChange={(e) => setInputValue({ ...inputValue, status: e.target.value })} />
                                        <S.StatusTheme>
                                            <S.StatusThemeP htmlFor="radio1">Нужно сделать</S.StatusThemeP>
                                        </S.StatusTheme>
                                        </label>

                                        <label>
                                        <S.StatusThemesInput
                                                type="radio"
                                                name="status"
                                                value="В работе"
                                                onChange={(e) => setInputValue({ ...inputValue, status: e.target.value })} />
                                        <S.StatusTheme>
                                            <S.StatusThemeP htmlFor="radio1">В работе</S.StatusThemeP>
                                        </S.StatusTheme>
                                        </label>

                                        <label>
                                        <S.StatusThemesInput
                                                type="radio"
                                                name="status"
                                                value="Тестирование"
                                                onChange={(e) => setInputValue({ ...inputValue, status: e.target.value })} />
                                        <S.StatusTheme>
                                            <S.StatusThemeP htmlFor="radio1">Тестирование</S.StatusThemeP>
                                        </S.StatusTheme>
                                        </label>

                                        <label>
                                        <S.StatusThemesInput
                                                type="radio"
                                                name="status"
                                                value="Готово"
                                                onChange={(e) => setInputValue({ ...inputValue, status: e.target.value })} />
                                        <S.StatusTheme>
                                            <S.StatusThemeP htmlFor="radio1">Готово</S.StatusThemeP>
                                        </S.StatusTheme>
                                        </label>
                                    </S.StatusThemes>
                                </div><S.PopBrowseWrap>
                                        <S.PopBrowseForm id="formBrowseCard" action="#">
                                            <S.FormBrowseBlock>
                                                <S.LabelSubttl htmlFor="textArea01">Описание задачи</S.LabelSubttl>
                                                <S.FormBrowseArea
                                                    name="description"
                                                    id="textArea"
                                                    placeholder={currentCard.description}
                                                   // value={currentCard.description}
                                                    onChange={onChangeInput}>

                                                </S.FormBrowseArea>
                                            </S.FormBrowseBlock>
                                        </S.PopBrowseForm>
                                        <Calendar selected={date} setSelected={setDate} />
                                    </S.PopBrowseWrap></>
                )}
                    {cardPage ? (
                    <S.PopBrowseBtnBrowse>
                        <div>
                        <S.BtnBrowse><S.BtnBorA onClick={handleSetCardPage}>Редактировать задачу</S.BtnBorA></S.BtnBrowse>
                            <S.BtnBrowse><S.BtnBorA onClick={handleDeleteClick}>Удалить задачу</S.BtnBorA></S.BtnBrowse>
                        </div>
                        <Link to="/"><S.BtnBrowseClose><S.BtnBgA>Закрыть</S.BtnBgA></S.BtnBrowseClose></Link>
                    </S.PopBrowseBtnBrowse>
                    ):(
                        <S.PopBrowseBtnEdit>
                        <div>
                            <S.BtnEditSave><S.BtnBgA onClick={NewEditTask}>Сохранить</S.BtnBgA></S.BtnEditSave>
                            <S.BtnEdit><S.BtnBorA onClick={handleCardPage}>Отменить</S.BtnBorA></S.BtnEdit>
                            <S.BtnEdit id="btnDelete"><S.BtnBorA onClick={handleDeleteClick}>Удалить задачу</S.BtnBorA></S.BtnEdit>
                        </div>
                        <Link to="/"><S.BtnBrowseClose><S.BtnBgA>Закрыть</S.BtnBgA></S.BtnBrowseClose></Link>
                    </S.PopBrowseBtnEdit> 
                    )}    
                  {error && error}                           
                </S.PopBrowseContent>
            </S.PopBrowseBlock>
        </S.PopBrowseContainer>
    </S.PopBrowse>
    )
  }
  
  
  