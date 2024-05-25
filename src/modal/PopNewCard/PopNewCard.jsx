import Calendar from "../../components/Calendar/Calendar";
import * as S from "./PopNewCard.stuled"
import { Link } from "react-router-dom";
import { AddTask } from "../../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useTasks } from "../../hooks/useTasks";
import { topicName } from "../../ColorStyles/topic";

  function PopNewCard() {
    const { user } = useUser();
    const navigate = useNavigate();
    const {setCards} = useTasks();
    const [error, setError] = useState(null);
    const [date, setDate] = useState(new Date());
    const [inputValue, setInputValue] = useState({
        title: "",
        topic: "",
        description: "",
        status: "",
      });

  const AddNewTask = async () => {
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

    AddTask({user, newCard})
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
                            <S.ErrorStyle>{error && error}</S.ErrorStyle>
                        </S.PopNewCardForm>
                           
            <Calendar selected={date} setSelected={setDate}/> 
                        
                    </S.PopNewCardWrap>
                    <S.PopNewCardCategories>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesThemes>
                        <label> 
                        <S.CategoriesWebDesignInput
                           type="radio"
                           id="radio1"
                           value="Web Design"
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                        <S.CategoriesHideWebDesign $themeColor={topicName[inputValue.topic]}>
                      
                         <S.WebDesignP htmlFor="radio1">Web Design</S.WebDesignP>
                         </S.CategoriesHideWebDesign>
                         </label>

                         <label> 
                         <S.CategoriesResearchInput
                           type="radio"
                           id="radio2"
                           value="Research"
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                             <S.CategoriesHideResearch $themeColor={topicName[inputValue.topic]}>
                       
                         <S.ResearchP htmlFor="radio2">Research</S.ResearchP>
                         </S.CategoriesHideResearch>
                         </label>

                         <label> 
                         <S.CategoriesCopywritingInput
                           type="radio"
                           id="radio3"
                           value="Copywriting"
                           onChange={(e) =>
                            setInputValue({ ...inputValue, topic: e.target.value })
                          }
                       />
                         <S.CategoriesHideCopywriting $themeColor={topicName[inputValue.topic]}>
                       
                         <S.CopywritingP htmlFor="radio3">Copywriting</S.CopywritingP>
                         </S.CategoriesHideCopywriting>
                         </label>

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