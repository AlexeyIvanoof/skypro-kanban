import * as S from "./PopUserModal.stuled"
import { Link } from "react-router-dom";

function PopUserModal () {
	

    return(
<S.HeaderPopUserSet id="user-set-target">
							
							<S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
							<S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
							<S.PopUserSetTheme>
								<S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
								<S.PopUserSetThemeInput type="checkbox" name="checkbox"/>
							</S.PopUserSetTheme>
							<Link to="/exit"><S.Button>Выйти</S.Button></Link>
							
						
						</S.HeaderPopUserSet>
    )
}

export default PopUserModal;