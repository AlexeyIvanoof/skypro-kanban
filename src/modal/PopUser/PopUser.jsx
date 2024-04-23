import * as S from './PopUser.styled'

function PopUser (){
    return(
<S.PopExit id="popExit">
				<S.PopExitContainer>
					<S.PopExitBlock>
						<div>
							<S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
						</div>
						<form className="pop-exit__form" id="formExit" action="#">
							<S.PopExitFormGroup>
								<S.PopExitYesButton id="exitYes"><S.PopExitYesA>Да, выйти</S.PopExitYesA> </S.PopExitYesButton>
								<S.PopExitNoButton id="exitNo"><S.PopExitNoA>Нет, остаться</S.PopExitNoA> </S.PopExitNoButton>
							</S.PopExitFormGroup>
						</form>
					</S.PopExitBlock>
				</S.PopExitContainer>
			</S.PopExit>
    )
}
export default PopUser;