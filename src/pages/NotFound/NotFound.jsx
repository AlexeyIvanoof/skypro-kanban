import{ styled } from 'styled-components'
import { Link } from 'react-router-dom';

export const ErrorPage = styled.h1`
color: #0c0b0b;
margin-top: 350px`

export const ErrorPageContent = styled.div`

display: grid;
    justify-items: center;
`;

export const BtnBrowseClose = styled.button`
height: 30px;
margin-bottom: 10px;
padding: 0 14px;
margin-right: 8px;
border-radius: 4px;
background: #565EEF;
border: none;
outline: none;
color: #FFFFFF;
&:hover {
    background-color: #33399b;
  }
`;

export const BtnBgA = styled.a`
:hover{
color: #FFFFFF};
`;

export function NotFound() {
    return (
<ErrorPageContent>
    <ErrorPage>Страница не найдена!</ErrorPage>
    <Link to="/"><BtnBrowseClose><BtnBgA>Вернуться на главную</BtnBgA></BtnBrowseClose></Link>
</ErrorPageContent>
    )
}