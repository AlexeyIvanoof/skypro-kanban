import * as S from "./Signin.stuled"
import { Link } from 'react-router-dom';


export function Signin() {
    
    return (
 <S.Wrapper>
        <S.ContainerSignin>
            <S.Modal>
				<S.ModalBlock>
					<div>
						<S.ModalTtlH2>Вход</S.ModalTtlH2>
					</div>
		<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
						<S.ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
						<S.ModalBtnEnter id="btnEnter"><Link to="/"><S.ModalBtnEnterA>Войти</S.ModalBtnEnterA></Link></S.ModalBtnEnter>
						<S.ModalFormGroup>
						<S.ModalFormGroupP>Нужно зарегистрироваться?</S.ModalFormGroupP>
						<Link to="/registr"><S.ModalFormGroupA>Регистрируйтесь здесь</S.ModalFormGroupA></Link>
						</S.ModalFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.ContainerSignin>
    </S.Wrapper>
    )
  }
