import React from "react";
import { VscCircleLarge as TbCircle } from "react-icons/vsc";
import { useAppSelector } from "../redux Toolkit/hooks";
import {
	getInstructions,
	getNavSteps,
	getPosition,
} from "../redux Toolkit/slice/RoboSlice";

type Props = {};

const Navbar = (props: Props) => {
	const NavSteps = useAppSelector(getNavSteps);
	const position = useAppSelector(getPosition);
	const instructions = useAppSelector(getInstructions);
	return (
		<div
			className="w-full bg-indigo-950 font-semibold p-7 pb-10 text-white flex flex-col gap-2 items-center justify-between
			sm:p-5 sm:flex-row">
			<span className="text-2xl w-full text-center sm:text-left sm:w-1/3">
				Navbar
			</span>
			<div className="w-full sm:w-2/3 flex justify-center items-center">
				<div className="flex justify-between relative h-5 w-full sm:w-2/3">
					{NavSteps?.map((color, i) => (
						<div key={i} className="z-10 text-[10px] text-center">
							<TbCircle
								className={`w-5 h-5 ${
									color
										? "text-green-500 bg-green-500"
										: "bg-indigo-950"
								} ${
									position.x === 4 &&
									position.y === 4 &&
									i === instructions.length - 2
										? "text-orange-500 bg-orange-500"
										: ""
								} rounded-full`}
							/>
							{i + 1}
						</div>
					))}
					<div className="hidden sm:flex justify-center items-center z-0 absolute w-full top-[9.5px] h-[1px] bg-white/30" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
