import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { stat } from "fs";

// Interface representing the state of the Robo application
interface RoboState {
	Directions: string[];
	Position: { x: number; y: number };
	IsPlaying: boolean;
	hasPlayed: boolean;
	Instructions: string[];
	NavSteps: boolean[];
}

// Initial state for the Robo application
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

// Create a Redux slice for the Robo application
const roboSlice = createSlice({
	name: "robo",
	initialState,
	reducers: {
		// Add a direction to the Directions array
		addDirection: (state, action) => {
			state.Directions.push(action.payload);
		},
		// Delete the last direction from the Directions array
		deleteDirection: (state) => {
			state.Directions.pop();
		},
		// Set the position of the robot
		setPosition: (state, action) => {
			state.Position = action.payload;
		},
		// Set the play state of the robot
		setPlay: (state, action) => {
			state.IsPlaying = action.payload;
		},
		// Set whether the robot has played
		setHasPlayed: (state, action) => {
			state.hasPlayed = action.payload;
		},
		// Set the instructions for the robot
		setInstructions: (state, action) => {
			// If the length of Instructions is greater than 11, remove the oldest instruction
			if (state.Instructions.length + 1 > 11) {
				state.Instructions.shift();
			}
			state.Instructions.push(action.payload);
		},
		// Toggle the navigation steps at the specified index in the NavSteps array
		setNavSteps: (state, action) => {
			state.NavSteps[action.payload] = !state.NavSteps[action.payload];
		},
		// Reset the state of the Robo application to initial values
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

// Extract the action creators from the roboSlice object
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

// Selectors to retrieve specific pieces of state from the Redux store
export const getDirections = (state: RootState) => state.robo.Directions;
export const getPosition = (state: RootState) => state.robo.Position;
export const getIsPlaying = (state: RootState) => state.robo.IsPlaying;
export const getHasPlayed = (state: RootState) => state.robo.hasPlayed;
export const getInstructions = (state: RootState) => state.robo.Instructions;
export const getNavSteps = (state: RootState) => state.robo.NavSteps;

// Default export: the reducer function for the Robo slice
export default roboSlice.reducer;
