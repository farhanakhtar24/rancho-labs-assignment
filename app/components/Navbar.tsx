import React from "react";
import { VscCircleLarge as TbCircle } from "react-icons/vsc";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className="w-full bg-indigo-950 px-5 py-5 font-semibold text-white flex items-center justify-between">
			<span className="text-2xl ">Navbar</span>
			<div className="flex gap-5 relative h-5">
				{[...Array(13)].map((_, i) => (
					<div key={i} className="z-10 text-[10px] text-center">
						<TbCircle className="w-5 h-5 text-green-500 bg-green-500 rounded-full" />
						{i + 1}
					</div>
				))}
				<hr className="z-0 absolute top-[10px] w-full flex justify-center items-center opacity-50" />
			</div>
		</div>
	);
};

export default Navbar;
