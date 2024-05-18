import Calendar from "../../components/Calendar/Calendar";
import * as S from "./PopNewCard.stuled"
import { Link } from "react-router-dom";
import { AddTask } from "../../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";

  function PopNewCard({theme}) {
    const { user } = useUser();
    const navigate = useNavigate();
    const {setCards} = useTasks();
	const [error, setError] = useState(null);
	//const [title, setTitle] = useState("");
	//const [setTopic] = useState("");
	//const [description, setDescription] = useState("");
    //const [status, setStatus] = useState("");
    //const [setNewCards] = useState(null);
    const [selected, setSelected] = useState(null);
    const [inputValue, setInputValue] = useState({
        title: "",
        topic: "Research",
        description: "",
        status: "Без статуса",
        date: new Date()
      });
 /*const AddNewTask = async () => {
      try {
        const response = await AddTask(user,{ title, topic, description, status});
		setNewCards(response.tasks);
       
        navigate("/");
      } catch (currentError) {
        setError(currentError.message);
        console.log(error);
      }
  };*/

  const AddNewTask = async () => {
  const title = !inputValue.title ? "Новая задача": inputValue.title;
  const topic = !inputValue.topic ? "Research": inputValue.topic;
  const status = !inputValue.status ? "Без статуса": inputValue.status;
  const newCard = {
    ...inputValue,
    title,
    topic,
    status
  }

    AddTask(user,{newCard})
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
                                name="title" 
                                id="formTitle" 
                                placeholder="Введите название задачи..." autoFocus
                                onChange={onChangeInput}
                                />
                            </S.FormNewBlock>
                            
                            <S.FormNewBlock>
                                <S.Label htmlFor="formTitle">Статус</S.Label>
                                <S.FormNewInput 
                                type="text" 
                                name="status" 
                                id="formTitle" 
                                placeholder="Введите статус задачи..." autoFocus
                                onChange={onChangeInput}
                                />
                            </S.FormNewBlock>

                            <S.FormNewBlock>
                                <S.Label  htmlFor="textArea" className="subttl">Описание задачи</S.Label>
                                <S.FormNewArea 
                                name="description" 
                                id="textArea"  
                                placeholder="Введите описание задачи..."
                                onChange={onChangeInput}>
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
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                         <S.CatThemeP htmlFor="radio1">Web Design</S.CatThemeP>
                         </S.CategoriesTheme>

                             <S.CategoriesTheme $themeColor={theme}>
                        <S.Input
                           type="radio"
                           value="Research"
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                         <S.CatThemeP htmlFor="radio1">Research</S.CatThemeP>
                         </S.CategoriesTheme>

                         <S.CategoriesTheme $themeColor={theme}>
                        <S.Input
                           type="radio"
                           value="Copywriting"
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                         <S.CatThemeP htmlFor="radio1">Copywriting</S.CatThemeP>
                         </S.CategoriesTheme>

                        </S.CategoriesThemes>
                    </S.PopNewCardCategories>
                    {error && error}
                    <S.Button id="btnCreate"onClick={AddNewTask}>Создать задачу</S.Button>
                </S.PopNewCardContent>
            </S.PopNewCardBlock>
        </S.PopNewCardContainer>
    </S.PopNewCard>

    )
  }
  
  
  export default  PopNewCard;