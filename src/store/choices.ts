import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Choice = {
	text: string;
	index: number;
};

export interface ChoiceState {
	choices: Choice[];
}

const initialState: ChoiceState = {
	choices: [],
};

export const choiceSlice = createSlice({
	name: 'choice',
	initialState,
	reducers: {
		setChoices: (state, action: PayloadAction<Choice[]>) => {
			state.choices = action.payload;
		},
	},
});

export const { setChoices } = choiceSlice.actions;
export default choiceSlice.reducer;
