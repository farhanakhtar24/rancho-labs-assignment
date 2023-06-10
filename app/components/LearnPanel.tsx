import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
type Props = {};

const LearnPanel = (props: Props) => {
	return (
		<div className="h-full w-full bg-gray-100">
			{/* Learn Nav of grey background */}
			<div className="w-full bg-gray-300 px-5 py-4 text-lg text-black font-semibold flex items-center gap-3">
				<HiOutlineBookOpen className="text-3xl text-black rounded" />
				<span>Learn </span>
			</div>
			{/* Learn Panel of white background */}
			<p className="p-5 w-full grid grid-cols-12 leading-4 text-sm gap-2 font-medium">
				<span className="col-span-1 flex justify-end">{`1.`}</span>
				<span className="col-span-11">
					{`Set the starting position: Drag and place the sprite on
					the stage to set its initial position. Click and drag the
					sprite to position it where you want it to start.`}
				</span>
				<span className="col-span-1 flex justify-end">{`2.`}</span>
				<span className="col-span-11">
					{`Add movement blocks: In the block palette on the left
					side of the screen, locate the "Motion" category. You will
					find blocks like "Move 10 steps," Turn 15 degrees," and "Go
					to x: []y: []".`}
				</span>
				<span className="col-span-1 flex justify-end">{`3.`}</span>
				<span className="col-span-11">
					{`Use the "Go to x: []y: []" block: Drag the "Go to x: []
					y: []" block into the scripting area. Set the x and y values
					of the block to the coordinates of the target position you
					want the sprite to move to. For example, if you want the
					sprite to move to position (200, 100), set the x value to
					200 and the y value to 100.`}
				</span>
			</p>
		</div>
	);
};

export default LearnPanel;
