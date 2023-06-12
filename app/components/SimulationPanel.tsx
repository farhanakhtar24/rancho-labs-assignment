import React from "react";
import { MdConstruction } from "react-icons/md";
import SimulationGrid from "./SimulationGrid";
import StepDisplay from "./StepDisplay";

type Props = {};

const SimulationPanel = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col">
			<div className="w-full bg-indigo-900 px-5 py-4 text-lg text-white font-semibold flex items-center gap-3">
				<MdConstruction className="text-3xl text-white rounded" />
				<span>Build</span>
			</div>
			<div className="h-full w-full bg-indigo-800 p-5 grid grid-cols-2">
				<SimulationGrid />
				<StepDisplay />
			</div>
		</div>
	);
};

export default SimulationPanel;
