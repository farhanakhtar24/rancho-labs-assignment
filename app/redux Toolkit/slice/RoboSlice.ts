import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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
		removeDirection: (state, action) => {
			state.Directions.pop();
		},
		clearDirections: (state) => {
			state.Directions = [];
		},
		setPosition: (state, action) => {
			state.Position = action.payload;
		},
	},
});

export const { addDirection, setPosition } = roboSlice.actions;
export const getDirections = (state: RootState) => state.robo.Directions;
export const getPosition = (state: RootState) => state.robo.Position;

export default roboSlice.reducer;