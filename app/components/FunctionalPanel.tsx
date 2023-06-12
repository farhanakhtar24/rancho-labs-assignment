"use client";
import React, { useState } from "react";
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { TbBackspace as Backspace } from "react-icons/tb";
import { GrPowerReset as Reset } from "react-icons/gr";
import { BsFillPlayFill as PlayIcon } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import {
	addDirection,
	deleteDirection,
	reset,
	getDirections,
	setPosition,
	getPosition,
	getIsPlaying,
	setPlay,
	getHasPlayed,
	setHasPlayed,
	setInstructions,
	setNavSteps,
} from "../redux Toolkit/slice/RoboSlice";
import { useInterval } from "usehooks-ts";

type Props = {};

const FunctionalPanel = (props: Props) => {
	const dispatch = useAppDispatch();

	const position = useAppSelector(getPosition);
	const isPlaying = useAppSelector(getIsPlaying);
	const hasPlayed = useAppSelector(getHasPlayed);
	const [directionArray, setDirectionArray] = useState<string[]>(
		useAppSelector(getDirections)
	);

	const [count, setCount] = useState<number>(0);

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
	};

	useInterval(
		() => {
			if (count < directionArray.length) {
				if (directionArray[count] === "Left" && position.x > 0) {
					dispatch(setPosition({ x: position.x - 1, y: position.y }));
				} else if (
					directionArray[count] === "Right" &&
					position.x < 4
				) {
					dispatch(setPosition({ x: position.x + 1, y: position.y }));
				} else if (directionArray[count] === "Up" && position.y > 0) {
					dispatch(setPosition({ x: position.x, y: position.y - 1 }));
				} else if (directionArray[count] === "Down" && position.y < 4) {
					dispatch(setPosition({ x: position.x, y: position.y + 1 }));
				} else {
					dispatch(
						setInstructions(
							`Robot is trying to move out of bounds.`
						)
					);
					setCount(0);
					dispatch(setPlay(false));
					return;
				}
				dispatch(
					setInstructions(`Robot Move ${directionArray[count]}.`)
				);
				dispatch(setNavSteps(count));
			} else {
				if (position.x === 4 && position.y === 4) {
					dispatch(
						setInstructions(
							"Robot has reached the destination point"
						)
					);
				} else {
					dispatch(
						setInstructions(
							"Robot has not reached the destination point"
						)
					);
				}
				setCount(0);
				dispatch(setPlay(false));
				return;
			}
			setCount(count + 1);
		},
		// Delay in milliseconds or null to stop it
		isPlaying ? 250 : null
	);

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
						onClick={() => {
							setDirectionArray(
								directionArray.slice(
									0,
									directionArray.length - 1
								)
							);
							dispatch(deleteDirection());
						}}>
						<Backspace />
					</div>
					<div
						className="w-12 h-12 bg-slate-200 rounded flex justify-center items-center text-4xl cursor-pointer rotate-180"
						onClick={() => {
							setDirectionArray([]);
							dispatch(reset());
						}}>
						<Reset />
					</div>
					{/* play button */}
					{hasPlayed ? null : (
						<div
							className="h-12 px-3 bg-slate-200 rounded flex items-center text-xl cursor-pointer font-bold"
							onClick={() => {
								if (directionArray.length === 0)
									return alert("Please add directions");
								dispatch(setPlay(true));
								dispatch(setHasPlayed(true));
							}}>
							<PlayIcon className="w-10 h-10" />
							<span className="pr-2">Play</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FunctionalPanel;
