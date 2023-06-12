"use client";
import React from "react";
import FunctionalPanel from "./components/FunctionalPanel";
import Navbar from "./components/Navbar";
import LearnPanel from "./components/LearnPanel";
import SimulationPanel from "./components/SimulationPanel";
import { Provider } from "react-redux";
import { store } from "./redux Toolkit/store";

type Props = {};

const page = (props: Props) => {
	return (
		<Provider store={store}>
			<div className="w-screen h-screen flex flex-col">
				<Navbar />
				<div className="w-full h-full flex flex-col sm:flex-row">
					<div className="w-full h-full sm:w-1/3">
						<LearnPanel />
					</div>
					<div className="w-full h-full sm:w-2/3 flex flex-col justify-between">
						<SimulationPanel />
						<FunctionalPanel />
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default page;
