import * as S from "./PopUserModal.stuled"
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function PopUserModal () {
	const {user} = useUser();

    return(
<S.HeaderPopUserSet id="user-set-target">
							
							<S.PopUserSetName>{user.user.name}</S.PopUserSetName>
							<S.PopUserSetMail>{user.user.login}</S.PopUserSetMail>
							<S.PopUserSetTheme>
								<S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
								<S.PopUserSetThemeInput type="checkbox" name="checkbox"/>
							</S.PopUserSetTheme>
							<Link to="/exit"><S.Button>Выйти</S.Button></Link>
							
						
						</S.HeaderPopUserSet>
    )
}

export default PopUserModal;