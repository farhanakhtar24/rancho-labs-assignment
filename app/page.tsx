import React from "react";
import FunctionalPanel from "./components/FunctionalPanel";
import Navbar from "./components/Navbar";
import LearnPanel from "./components/LearnPanel";
import SimulationPanel from "./components/SimulationPanel";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-screen h-screen flex flex-col">
			<Navbar />
			<div className="w-full h-full flex">
				<div className="w-1/3 h-full">
					<LearnPanel />
				</div>
				<div className="w-2/3 h-full flex flex-col justify-between">
					<SimulationPanel />
					<FunctionalPanel />
				</div>
			</div>
		</div>
	);
};

export default page;
