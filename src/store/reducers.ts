import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Content = {
	text: string;
	index: string;
};

export type Choice = {
	text: string;
	index: number;
};

export type Dice = {
	a: number;
	b: number;
	dThree: number;
};

export interface State {
	content: Content[];
	choices: Choice[];
	dice: Dice;
}

const initialState: State = {
	content: [],
	choices: [],
	dice: { a: 0, b: 0, dThree: 0 },
};

export const stateSlice = createSlice({
	name: 'state',
	initialState,
	reducers: {
		addContent: (state, action: PayloadAction<Content>) => {
			state.content.push(action.payload);
		},
		setChoices: (state, action: PayloadAction<Choice[]>) => {
			state.choices = action.payload;
		},
		setDice: (state, action: PayloadAction<Partial<Dice>>) => {
			state.dice = { ...state.dice, ...action.payload };
		},
	},
});

export const { addContent, setChoices, setDice } = stateSlice.actions;
export default stateSlice.reducer;
