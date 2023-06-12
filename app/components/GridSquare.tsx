import React from "react";
import { FaRobot as Robot } from "react-icons/fa";

type Props = {
	x_square: number;
	y_square: number;
	x_robo: number;
	y_robo: number;
};

const GridSquare = ({ x_square, y_square, x_robo, y_robo }: Props) => {
	return (
		<div
			className={`w-full h-full border border-gray-500 ${
				x_square === 4 && y_square === 4
					? "bg-cyan-500"
					: "bg-yellow-500"
			}`}>
			{x_square === x_robo && y_square === y_robo ? (
				<div className="w-full h-full flex justify-center items-center">
					<Robot
						className={`text-3xl ${
							x_robo === 4 && y_robo === 4
								? "animate-bounce text-green-100"
								: "text-yellow-50"
						}`}
					/>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default GridSquare;
