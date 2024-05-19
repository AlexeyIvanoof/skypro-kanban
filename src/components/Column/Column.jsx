import Card from "../Card/Card";
import * as S from "./Column.styled"

function Column ({title, cardList}){
    return(
<S.MainColumn>
							<S.ColumnTitle>
								<S.ColumnTitleP>{title}</S.ColumnTitleP>
							</S.ColumnTitle>
							<S.Cards>
							{cardList.map((task) => (
          <Card
            key={task._id}
            title={task.title}
            date={task.date}
            status={task. status}
            topic={task.topic}
            theme={task.theme}
            id={task._id}
          />
        ))}
							</S.Cards>
						</S.MainColumn>	
    )
}
export default  Column;