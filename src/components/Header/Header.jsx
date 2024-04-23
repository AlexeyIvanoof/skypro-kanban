import { useState } from 'react'
import PopUserModal from '../../modal/PopUserModal/PopUserModal';
import * as S from "./Header.stuled"


function Header({onCardAdd}) {
    const[isOupen, setIsOupen] = useState(false)
    const handlClick = () => {
		setIsOupen((prevState)=> !prevState)
	}

    return (
        <S.Header>
			<S.Container>
				<S.HeaderBlock>
					<div>
						<a href="" target="_self"><S.HeaderLogo src="logo.png" alt="logo"/></a>
					</div>
					<S.HeaderNav>
						<S.HeaderBtnMainNew onClick={onCardAdd} id="btnMainNew"><a>Создать новую задачу</a></S.HeaderBtnMainNew>
						<S.HeaderUser onClick={handlClick}>Ivan Ivanov</S.HeaderUser>
						{isOupen &&(<PopUserModal/>)}
						
					</S.HeaderNav>					
				</S.HeaderBlock>
			</S.Container>			
		</S.Header>
    )
  }
  
  
  export default Header;