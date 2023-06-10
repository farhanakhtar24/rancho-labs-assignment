import React from "react";

type Props = {};

const GridSquare = ({ x, y }: { x: number; y: number }) => {
	return (
		<div className="w-full h-full bg-yellow-500 border border-gray-500">
			{x}, {y}
		</div>
	);
};

const SimulationGrid = () => {
	return (
		<div className="flex justify-center items-center h-full">
			{/* {make a grid of 25 boxes with 5 rows and 5 coloumns} */}
			<div className="w-[310px] h-[310px] grid grid-cols-5 grid-rows-5 shadow-2xl ">
				{[...Array(25)].map((_, i) => (
					<GridSquare key={i} x={Math.floor(i / 5)} y={i % 5} />
				))}
			</div>
		</div>
	);
};

export default SimulationGrid;
