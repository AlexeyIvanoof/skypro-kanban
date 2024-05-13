import * as S from "./Signin.stuled"
import { Link } from 'react-router-dom';
import { LoginApi } from "../../../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";

export function Signin() {
    const {setUser} = useUser()
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [offButton, setOffButton] = useState(false);
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleLogin = async () => {
		try {
		const response = await LoginApi({login, password});
		setUser(response);
		console.log(setUser)
		localStorage.setItem("user", JSON.stringify(response));
		setOffButton(true);
        navigate("/");
		} catch (currentError) {
		setError(currentError.message);
		console.log(error);
		} finally {
		setOffButton(false);
		}
	};
    
    return (
 <S.Wrapper>
        <S.ContainerSignin>
            <S.Modal>
				<S.ModalBlock>
					<div>
						<S.ModalTtlH2>Вход</S.ModalTtlH2>
					</div>
		<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput 
						type="text" 
						name="login" 
						id="formlogin" 
						placeholder="Эл. почта"
						value={login}
						onChange={(event) => {
						setLogin(event.target.value);
						}}
						/>

						<S.ModalInput 
						type="password" 
						name="password" 
						id="formpassword" 
						placeholder="Пароль"
						value={password}
						onChange={(event) => {
						setPassword(event.target.value);
						}}
						/>

						<S.ModalBtnEnter id="btnEnter" onClick={handleLogin} disabled={offButton}>
							Войти
						</S.ModalBtnEnter>
						
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
