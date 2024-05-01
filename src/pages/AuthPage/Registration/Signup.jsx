import * as S from "./Signup.stuled"
import { Link } from 'react-router-dom';

export function Signup() {
    
    return (
        <S.Wrapper>
        <S.ContainerSignin>
            <S.Modal>
				<S.ModalBlock>
					<div>
						<S.ModalTtlH2>Вход</S.ModalTtlH2>
					</div>
		<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
						<S.ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<S.ModalBtnEnter id="SignUpEnter"><S.ModalBtnSignupEntA href="../main.html">Зарегистрироваться</S.ModalBtnSignupEntA> </S.ModalBtnEnter>
						<S.ModalFormGroup>
							<S.ModalFormGroupP>Уже есть аккаунт?  <Link to="/login"><S.ModalFormGroupA>Войдите здесь</S.ModalFormGroupA></Link></S.ModalFormGroupP>
						</S.ModalFormGroup>
                        </S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.ContainerSignin>
    </S.Wrapper>
    )
  }