import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
	sdidfjidf;
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};
export default Cardlist;
