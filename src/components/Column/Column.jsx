import Card from "../Card/Card";
import cardList from "../../data";

function Column ({title}){
    return(
<div className="main__column column">
							<div className="column__title">
								<p>{title}</p>
							</div>
							<div className="cards">
							{cardList.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
			status={item. status}
            topic={item.topic}
          />
        ))}
							</div>
						</div>	
    )
}
export default  Column;