import { useState } from 'react'
import PopUserModal from '../../modal/PopUserModal/PopUserModal';
import * as S from "./Header.stuled"
import { Link } from 'react-router-dom';

function Header() {
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
					<Link to="/cardnew"><S.HeaderBtnMainNew id="btnMainNew"><a>Создать новую задачу</a></S.HeaderBtnMainNew></Link>
						<S.HeaderUser onClick={handlClick}>Alexey Ivanov</S.HeaderUser>
						{isOupen &&(<PopUserModal/>)}
						
					</S.HeaderNav>					
				</S.HeaderBlock>
			</S.Container>			
		</S.Header>
    )
  }
  
  
  export default Header;