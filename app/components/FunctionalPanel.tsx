"use client";
import React from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { TbBackspace as Backspace } from "react-icons/tb";
import { GrPowerReset as Reset } from "react-icons/gr";
import { useAppDispatch } from "../redux Toolkit/hooks";
import {
	addDirection,
	clearDirections,
	deleteDirection,
} from "../redux Toolkit/slice/RoboSlice";

type Props = {};

const FunctionalPanel = (props: Props) => {
	const dispatch = useAppDispatch();
	const [directionArray, setDirectionArray] = React.useState<string[]>([]);

	const validateDirection = (direction: string) => {
		if (directionArray.length <= 13) {
			setDirectionArray([...directionArray, direction]);
			dispatch(addDirection(direction));
		} else {
			alert("Maximum number of directions reached");
		}
	};

	const handleOnDrag = (e: React.DragEvent, direction: string) => {
		e.dataTransfer.setData("direction", direction);
	};

	const handleOnDrop = (e: React.DragEvent) => {
		const newDirection = e.dataTransfer.getData("direction") as string;
		validateDirection(newDirection);
		console.log(directionArray);
	};

	return (
		<div className="w-full flex flex-col">
			<div className="w-full bg-blue-500 p-5 text-lg text-white font-semibold flex flex-col gap-5">
				Logic Panel
				<ul
					className="flex flex-row gap-2 w-full h-12 rounded outline-dashed"
					onDrop={handleOnDrop}
					onDragOver={(e: React.DragEvent) => e.preventDefault()}>
					{directionArray.map((string, i) => (
						<li key={i}>
							{string === "Left" ? (
								<HiArrowSmLeft className="w-12 h-12 bg-slate-200 text-black rounded" />
							) : string === "Right" ? (
								<HiArrowSmRight className="w-12 h-12 bg-slate-200 text-black rounded" />
							) : string === "Up" ? (
								<HiArrowSmUp className="w-12 h-12 bg-slate-200 text-black rounded" />
							) : string === "Down" ? (
								<HiArrowSmDown className="w-12 h-12 bg-slate-200 text-black rounded" />
							) : (
								""
							)}
						</li>
					))}
				</ul>
			</div>
			<div className="w-full flex gap-10  bg-indigo-950 p-5">
				<div className="flex gap-2">
					{/* // left arrow */}
					{["Left", "Right", "Up", "Down"].map((string, i) => (
						<div
							key={i}
							className="w-12 h-12 bg-slate-200 rounded flex justify-center items-center text-4xl cursor-pointer"
							draggable
							onDragStart={(e) => handleOnDrag(e, string)}
							onClick={(e) => validateDirection(string)}>
							{string === "Left" ? (
								<HiArrowSmLeft />
							) : string === "Right" ? (
								<HiArrowSmRight />
							) : string === "Up" ? (
								<HiArrowSmUp />
							) : string === "Down" ? (
								<HiArrowSmDown />
							) : (
								""
							)}
						</div>
					))}
				</div>
				<div className="flex gap-2">
					<div
						className="w-12 h-12 bg-slate-200 rounded flex justify-center items-center text-4xl cursor-pointer"
						onClick={
							() => {
								setDirectionArray(
									directionArray.slice(
										0,
										directionArray.length - 1
									)
								);
								dispatch(deleteDirection());
							}
							// remove last element
						}>
						<Backspace />
					</div>
					<div
						className="w-12 h-12 bg-slate-200 rounded flex justify-center items-center text-4xl cursor-pointer rotate-180"
						onClick={() => {
							setDirectionArray([]);
							dispatch(clearDirections());
						}}>
						<Reset />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FunctionalPanel;
