"use client";
import React, { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import { getPosition } from "../redux Toolkit/slice/RoboSlice";
import { FaRobot as Robot } from "react-icons/fa";

type Props = {};

const GridSquare = ({
	x_square,
	y_square,
	x_robo,
	y_robo,
}: {
	x_square: number;
	y_square: number;
	x_robo: number;
	y_robo: number;
}) => {
	return (
		<div
			className={`w-full h-full bg-yellow-500 border border-gray-500 ${
				x_square === 4 && y_square === 4 ? "bg-orange-500" : ""
			}`}>
			{x_square === x_robo && y_square === y_robo ? (
				<div className="w-full h-full flex justify-center items-center">
					<Robot className="text-3xl text-yellow-50" />
				</div>
			) : (
				""
			)}
		</div>
	);
};

const SimulationGrid = () => {
	const { x, y } = useAppSelector(getPosition);

	return (
		<div className="flex justify-center items-center h-full">
			{/* {make a grid of 25 boxes with 5 rows and 5 coloumns} */}
			<div
				className={`w-[310px] h-[310px] grid grid-cols-5 grid-rows-5 shadow-2xl ${
					x === 4 && y === 4 ? "" : ""
				}`}>
				{[...Array(25)].map((_, i) => (
					<GridSquare
						key={i}
						x_square={i % 5}
						y_square={Math.floor(i / 5)}
						x_robo={x}
						y_robo={y}
					/>
				))}
			</div>
		</div>
	);
};

export default SimulationGrid;
