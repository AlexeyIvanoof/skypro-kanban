import Calendar from "../../components/Calendar/Calendar";
import * as S from "./PopNewCard.stuled"
import { Link } from "react-router-dom";
import { AddTask } from "../../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";


  function PopNewCard({theme}) {
    const { user } = useUser();
    const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [title, setTitle] = useState("");
	const [topic, setTopic] = useState("");
	const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [newCards, setNewCards] = useState(null);
    const [selected, setSelected] = useState(null);
	
 const AddNewTask = async () => {
      try {
        const response = await AddTask(user,{ title, topic, description, status});
		setNewCards(response);
        const newCard = {
            title,
            topic,
            status,
            description,
          };
          setNewCards([...newCards, newCard]);
        navigate("/");
      } catch (currentError) {
        setError(currentError.message);
        console.log(error);
      }
  };

    return (
        <S.PopNewCard id="popNewCard">
        <S.PopNewCardContainer>
            <S.PopNewCardBlock>
                <S.PopNewCardContent>
                    <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                    <Link to="/"><S.PopNewCardClose>&#10006;</S.PopNewCardClose></Link>
                    <S.PopNewCardWrap>
                        <S.PopNewCardForm id="formNewCard" action="#">

                            <S.FormNewBlock>
                                <S.Label htmlFor="formTitle">Название задачи</S.Label>
                                <S.FormNewInput 
                                type="text" 
                                name="name" 
                                id="formTitle" 
                                placeholder="Введите название задачи..." autoFocus
                                value={title}
                                onChange={(event) => {
                                setTitle(event.target.value);
                                }}
                                />
                            </S.FormNewBlock>
                            
                            <S.FormNewBlock>
                                <S.Label htmlFor="formTitle">Статус</S.Label>
                                <S.FormNewInput 
                                type="text" 
                                name="name" 
                                id="formTitle" 
                                placeholder="Введите статус задачи..." autoFocus
                                value={status}
                                onChange={(event) => {
                                setStatus(event.target.value);
                                }}
                                />
                            </S.FormNewBlock>

                            <S.FormNewBlock>
                                <S.Label  htmlFor="textArea" className="subttl">Описание задачи</S.Label>
                                <S.FormNewArea 
                                name="text" 
                                id="textArea"  
                                placeholder="Введите описание задачи..."
                                value={description}
                                onChange={(event) => {
                                setDescription(event.target.value);
                                }}>
                                </S.FormNewArea>

                            </S.FormNewBlock>
                        </S.PopNewCardForm>
                           
            <Calendar selected={selected} setSelected={setSelected}/> 
                        
                    </S.PopNewCardWrap>
                    <S.PopNewCardCategories>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesThemes>
                            
                        <S.CategoriesTheme $themeColor={theme}>
                        <S.Input
                           type="radio"
                           value="Web Design"
                           onChange={(event) => {
                           setTopic(event.target.value);
                           }}
                       />
                         <S.CatThemeP htmlFor="radio1">Web Design</S.CatThemeP>
                         </S.CategoriesTheme>

                             <S.CategoriesTheme $themeColor={theme}>
                        <S.Input
                           type="radio"
                           value="Research"
                           onChange={(event) => {
                           setTopic(event.target.value);
                           }}
                       />
                         <S.CatThemeP htmlFor="radio1">Research</S.CatThemeP>
                         </S.CategoriesTheme>

                         <S.CategoriesTheme $themeColor={theme}>
                        <S.Input
                           type="radio"
                           value="Copywriting"
                           onChange={(event) => {
                           setTopic(event.target.value);
                           }}
                       />
                         <S.CatThemeP htmlFor="radio1">Copywriting</S.CatThemeP>
                         </S.CategoriesTheme>

                        </S.CategoriesThemes>
                    </S.PopNewCardCategories>
                    <S.Button id="btnCreate"onClick={AddNewTask}>Создать задачу</S.Button>
                </S.PopNewCardContent>
            </S.PopNewCardBlock>
        </S.PopNewCardContainer>
    </S.PopNewCard>

    )
  }
  
  
  export default  PopNewCard;