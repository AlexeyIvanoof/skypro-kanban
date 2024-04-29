import Card from "../Card/Card";
import * as S from "./Column.styled"

function Column ({title, cardList}){
    return(
<S.MainColumn>
							<S.ColumnTitle>
								<S.ColumnTitleP>{title}</S.ColumnTitleP>
							</S.ColumnTitle>
							<S.Cards>
							{cardList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
			status={item. status}
            topic={item.topic}
            theme={item.theme}
          />
        ))}
							</S.Cards>
						</S.MainColumn>	
    )
}
export default  Column;