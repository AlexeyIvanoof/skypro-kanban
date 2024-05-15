import Calendar from "../../components/Calendar/Calendar";
import * as S from "./CardPage.stuled"
import { Link, useParams } from 'react-router-dom';

export function CardPage({theme}) {
   const params = useParams();
   console.log(params.id)
    return (
        <S.PopBrowse>
        <S.PopBrowseContainer>
            <S.PopBrowseBlock>
                <S.PopBrowseContent>
                    <S.PopBrowseTopBlock>
                        <S.PopBrowseTtl>Название задачи</S.PopBrowseTtl>
                        <S.CategoriesTheme $themeColor={theme}>
                            <S.ThemesP>Web Design</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.PopBrowseTopBlock>
                    <div>
                        <S.StatusSubttl>Статус</S.StatusSubttl>
                        <S.StatusThemes>
                            <S.StatusTheme>
                                <S.StatusThemeP>Без статуса</S.StatusThemeP>
                            </S.StatusTheme> 
                        </S.StatusThemes>
                    </div>
                    <S.PopBrowseWrap>
                        <S.PopBrowseForm id="formBrowseCard" action="#">									
                            <S.FormBrowseBlock>
                                <S.LabelSubttl htmlFor="textArea01">Описание задачи</S.LabelSubttl>
                                <S.FormBrowseArea name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></S.FormBrowseArea>
                            </S.FormBrowseBlock>
                        </S.PopBrowseForm>
                       
                            <Calendar/>
                               
                    </S.PopBrowseWrap>
                    <S.CategoriesThemeDown>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesTheme>
                            <S.ThemesP>Web Design</S.ThemesP>
                        </S.CategoriesTheme>
                    </S.CategoriesThemeDown>
                    <S.PopBrowseBtnBrowse>
                        <div>
                        <S.BtnBrowse><S.BtnBorA>Редактировать задачу</S.BtnBorA></S.BtnBrowse>
                            <S.BtnBrowse><S.BtnBorA>Удалить задачу</S.BtnBorA></S.BtnBrowse>
                        </div>
                        <Link to="/"><S.BtnBrowseClose><S.BtnBgA>Закрыть</S.BtnBgA></S.BtnBrowseClose></Link>
                    </S.PopBrowseBtnBrowse>
                    <S.PopBrowseBtnEdit>
                        <div>
                            <S.BtnEditSave><S.BtnBgA>Сохранить</S.BtnBgA></S.BtnEditSave>
                            <S.BtnEdit><S.BtnBorA>Отменить</S.BtnBorA></S.BtnEdit>
                            <S.BtnEdit id="btnDelete"><S.BtnBorA>Удалить задачу</S.BtnBorA></S.BtnEdit>
                        </div>
                        <S.BtnBrowseClose><S.BtnBgA>Закрыть</S.BtnBgA></S.BtnBrowseClose>
                    </S.PopBrowseBtnEdit>
                                            
                </S.PopBrowseContent>
            </S.PopBrowseBlock>
        </S.PopBrowseContainer>
    </S.PopBrowse>
    )
  }
  
  
  