import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { useFetch } from "usehooks-ts";
import { getInstructions } from "../redux Toolkit/slice/RoboSlice";

type Props = {};

const StepDisplay = (props: Props) => {
	const Instructions = useAppSelector(getInstructions);

	useEffect(() => {
		console.log(Instructions);
	}, []);

	return (
		<div className="flex justify-center items-center h-full">
			<div className="w-[310px] h-[310px] flex flex-col shadow-2xl">
				<div className="w-full bg-blue-500 py-2 px-4 text-lg text-white font-normal">
					<u>Instructions Implemented</u>
				</div>
				<div className="w-full h-full bg-indigo-950 py-2 px-4 flex flex-col text-sm text-white">
					{Instructions?.map((Instruction, index) => (
						<div key={index}>{Instruction}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StepDisplay;
