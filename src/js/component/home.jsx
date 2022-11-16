import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({segundos}) => {
	let string = segundos.toString();
	let unidad = string[string.length -1]
	let decena = string[string.length -2]
	let centena = string[string.length -3]
	let milesima = string[string.length -4]

	return (
		<div className="text-center">
			<div className="texto">
			<span>Contador Incremental</span>
			</div>
			<div className="textobtn">
			<button className="btn"><span>🕒</span></button>
			<button className="btn"><span>{milesima == undefined? "0": milesima}</span></button>
			<button className="btn"><span>{centena == undefined? "0": centena}</span></button>
			<button className="btn"><span>{decena == undefined? "0": decena}</span></button>
			<button className="btn"><span>{unidad == undefined? "0": unidad}</span></button>
			</div>
		</div>
	);
};

export default Home;