import React, { useState } from "react";

//create your  component
export function TrafficLight() {
	//        ↓ variable name             ↓ default value
	const [color, setColor] = useState([]);
	//               ⬆ function to change the color

	return (
		<div>
			<div id="top"></div>
			<div className="main">
				<div
					className={
						color == "red" ? "red ligth selected" : "red ligth"
					}
					onClick={() => setColor("red")}></div>

				<div
					className={
						color == "yellow"
							? "yellow ligth selected"
							: "yellow ligth"
					}
					onClick={() => setColor("yellow")}></div>

				<div
					className={
						color == "green"
							? "green ligth selected"
							: "green ligth"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
