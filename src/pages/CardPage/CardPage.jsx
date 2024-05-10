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
                        <S.PopNewCardCalendar>
                            <S.CalendarTtlSubttl>Даты</S.CalendarTtlSubttl>
                            <S.CalendarBlock>
                                <S.CalendarNav>
                                    <S.CalendarMomth>Сентябрь 2023</S.CalendarMomth>
                                    <S.NavActions>
                                        <S.NavAction data-action="prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                                            </svg>
                                        </S.NavAction>
                                        <S.NavAction data-action="next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                                            </svg>
                                        </S.NavAction>
                                    </S.NavActions>
                                </S.CalendarNav>
                            <Calendar/>
                                <input type="hidden" id="datepick_value" value="08.09.2023"/>
                                <S.CalendarPeriod>
                                    <S.CalendarP>Срок исполнения: <S.CalendarPSpan>09.09.23</S.CalendarPSpan></S.CalendarP>
                                </S.CalendarPeriod>
                            </S.CalendarBlock>
                        </S.PopNewCardCalendar>
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
  
  
  