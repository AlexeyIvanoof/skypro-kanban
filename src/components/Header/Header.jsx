import { useState } from 'react'
import PopUserModal from '../../modal/PopUserModal/PopUserModal';
import './Header.css' 


function Header({onCardAdd}) {
    const[isOupen, setIsOupen] = useState(false)
    const handlClick = () => {
		setIsOupen((prevState)=> !prevState)
	}

    return (
        <header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="logo.png" alt="logo"/></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="logo_dark.png" alt="logo"/></a>
					</div>
					<nav className="header__nav">
						<button onClick={onCardAdd} className="header__btn-main-new _hover01" id="btnMainNew"><a>Создать новую задачу</a></button>
						<a onClick={handlClick} className="header__user _hover02">Ivan Ivanov</a>
						{isOupen &&(<PopUserModal/>)}
						
					</nav>					
				</div>
			</div>			
		</header>
    )
  }
  
  
  export default Header;