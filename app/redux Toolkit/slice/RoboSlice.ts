import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { useInterval } from "usehooks-ts";

interface RoboState {
	Directions: string[];
	Position: number[];
}

const initialState: RoboState = {
	Directions: [],
	Position: [0, 0],
};

const roboSlice = createSlice({
	name: "robo",
	initialState,
	reducers: {
		addDirection: (state, action) => {
			state.Directions.push(action.payload);
		},
		deleteDirection: (state) => {
			state.Directions.pop();
		},
		clearDirections: (state) => {
			state.Directions = [];
			state.Position = [0, 0];
		},
		setPosition: (state, action) => {
			state.Position = action.payload;
		},
	},
});

export const { addDirection, setPosition, clearDirections, deleteDirection } =
	roboSlice.actions;
export const getDirections = (state: RootState) => state.robo.Directions;
export const getPosition = (state: RootState) => state.robo.Position;

export default roboSlice.reducer;
