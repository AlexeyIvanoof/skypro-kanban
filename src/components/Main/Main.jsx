import Column from '../Column/Column';
import * as S from "./Main.stuled"

function Main ({cards}) {
	const statusList = [
		"Без статуса",
		"Нужно сделать",
		"В работе",
		"Тестирование",
		"Готово",
	];
    return(

		<S.Main>
			<S.Container>
				
				<S.MainBlock>
					<S.MainContent>
					{statusList.map((status) => (
    <Column
      key={status}
      title={status}
      cardList={cards.filter((card) => card.status === status)}
    />
  ))}
					</S.MainContent>
				
				</S.MainBlock>
			</S.Container>
		</S.Main>
    )
}

export default Main;