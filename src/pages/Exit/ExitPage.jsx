import * as S from './ExitPage.stuled'
import { Link } from 'react-router-dom';

function PopUser (){
    return(
<S.PopExit id="popExit">
				<S.PopExitContainer>
					<S.PopExitBlock>
						<div>
							<S.PopExitTtl>Выйти из аккаунта?</S.PopExitTtl>
						</div>
						<S.PopExitForm id="formExit" action="#">
							<S.PopExitFormGroup>
                            <Link to="/login"><S.PopExitYesButton id="exitYes"><S.PopExitYesA>Да, выйти</S.PopExitYesA> </S.PopExitYesButton></Link>
								<Link to="/"><S.PopExitNoButton id="exitNo"><S.PopExitNoA>Нет, остаться</S.PopExitNoA> </S.PopExitNoButton></Link>
							</S.PopExitFormGroup>
						</S.PopExitForm>
					</S.PopExitBlock>
				</S.PopExitContainer>
			</S.PopExit>
    )
}
export default PopUser;