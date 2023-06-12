import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { stat } from "fs";

interface RoboState {
	Directions: string[];
	Position: { x: number; y: number };
	IsPlaying: boolean;
	hasPlayed: boolean;
	Instructions: string[];
	NavSteps: boolean[];
}

const initialState: RoboState = {
	Directions: [],
	Position: {
		x: 0,
		y: 0,
	},
	IsPlaying: false,
	hasPlayed: false,
	Instructions: [],
	NavSteps: [...Array(13).fill(false)],
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
		setPosition: (state, action) => {
			state.Position = action.payload;
		},
		setPlay: (state, action) => {
			state.IsPlaying = action.payload;
		},
		setHasPlayed: (state, action) => {
			state.hasPlayed = action.payload;
		},
		setInstructions: (state, action) => {
			if (state.Instructions.length + 1 > 11) {
				state.Instructions.shift();
			}
			state.Instructions.push(action.payload);
		},
		setNavSteps: (state, action) => {
			state.NavSteps[action.payload] = !state.NavSteps[action.payload];
		},
		reset: (state) => {
			state.Directions = [];
			state.Position = { x: 0, y: 0 };
			state.IsPlaying = false;
			state.hasPlayed = false;
			state.Instructions = [];
			state.NavSteps = [...Array(13).fill(false)];
		},
	},
});

export const {
	addDirection,
	setPosition,
	deleteDirection,
	reset,
	setPlay,
	setHasPlayed,
	setInstructions,
	setNavSteps,
} = roboSlice.actions;

export const getDirections = (state: RootState) => state.robo.Directions;
export const getPosition = (state: RootState) => state.robo.Position;
export const getIsPlaying = (state: RootState) => state.robo.IsPlaying;
export const getHasPlayed = (state: RootState) => state.robo.hasPlayed;
export const getInstructions = (state: RootState) => state.robo.Instructions;
export const getNavSteps = (state: RootState) => state.robo.NavSteps;

export default roboSlice.reducer;
