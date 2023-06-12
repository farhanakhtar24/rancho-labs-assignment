"use client";
import React from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { getPosition } from "../redux Toolkit/slice/RoboSlice";
import GridSquare from "./GridSquare";

type Props = {};

const SimulationGrid = () => {
	// Get the current position of the robot from the Redux store
	const { x, y } = useAppSelector(getPosition);

	return (
		<div className="flex justify-center items-center h-full">
			{/* Render a grid of 25 boxes with 5 rows and 5 columns */}
			<div
				className={`w-[310px] h-[310px] grid grid-cols-5 grid-rows-5 shadow-2xl 
				`}>
				{/* Map over an array of length 25 to create each grid square */}
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
