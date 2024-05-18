import * as S from "./Signup.stuled"
import { Link } from 'react-router-dom';
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationApi } from "../../../Api";
import { useUser } from "../../../hooks/useUser";

export function Signup() {
	const {setUser} = useUser()
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [name, setName] = useState("");
	const [login, setlogin] = useState("");
	const [password, setPassword] = useState("");
	const [offButton, setOffButton] = useState(false);
	
 const handleRegister = async (event) => {
	event.preventDefault()
      try {
		if (!login) throw new Error('Не введен логин!')
		if (!name) throw new Error('Введите имя!')
		if (!password) throw new Error('Введите пароль!')	
        const response = await RegistrationApi({ login, name, password });
		setUser(response);
        localStorage.setItem("user",JSON.stringify(response));
        navigate("/login");
      } catch (error) {
        setError(error.message);
        
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
						<S.ModalTtlH2>Регистрация</S.ModalTtlH2>
					</div>
		<S.ModalFormLogin id="formLogIn" onSubmit = {handleRegister}>
						<S.ModalInput
                         type="text" 
                         name="first-name" 
						id="first-name" 
						placeholder="Имя"
						value={name}
						onChange={(event) => {
						setName(event.target.value);
						}} />
						
						<S.ModalInput
                         type="text" 
                         name="login" 
                         id="loginReg"
                         placeholder="Эл. почта"
                         value={login}
                         onChange={(event) => {
						setlogin(event.target.value);
                         }} />

						<S.ModalInput 
						type="password"
						name="password"
						placeholder="Пароль"
						value={password}
						onChange={(event) => {
						setPassword(event.target.value);
						}} />

						<S.ModalBtnEnter type="submit" id="SignUpEnter"   disabled={offButton}>
						Зарегистрироваться
						</S.ModalBtnEnter>
						<p style={{ color: "red" }}>{error}</p>
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