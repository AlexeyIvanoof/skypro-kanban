import Card from "../Card/Card";

function Column (props){
    return(
<div className="main__column column">
							<div className="column__title">
								<p>{props.name}</p>
							</div>
							<div className="cards">
								<Card/>
							</div>
						</div>	
    )
}
export default  Column;