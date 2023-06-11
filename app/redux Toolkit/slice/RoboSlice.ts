import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { useInterval } from "usehooks-ts";
import { stat } from "fs";

interface RoboState {
	Directions: string[];
	Position: { x: number; y: number };
	IsPlaying: boolean;
}

const initialState: RoboState = {
	Directions: [],
	Position: {
		x: 0,
		y: 0,
	},
	IsPlaying: false,
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
		},
		reset: (state) => {
			state.Directions = [];
			state.Position = { x: 0, y: 0 };
		},
		setPosition: (state, action) => {
			state.Position = action.payload;
		},
		setPlay: (state, action) => {
			state.IsPlaying = action.payload;
		},
	},
});

export const {
	addDirection,
	setPosition,
	clearDirections,
	deleteDirection,
	reset,
	setPlay,
} = roboSlice.actions;

export const getDirections = (state: RootState) => state.robo.Directions;
export const getPosition = (state: RootState) => state.robo.Position;
export const getIsPlaying = (state: RootState) => state.robo.IsPlaying;

export default roboSlice.reducer;
