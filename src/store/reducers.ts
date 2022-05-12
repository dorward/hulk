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

export type AttributeName = 'skill' | 'stamina' | 'luck';

export type Character = {
	attributes: {
		[K in AttributeName]: number;
	};
};

export interface State {
	content: Content[];
	choices: Choice[];
	dice: Dice;
	character: Character;
}

const initialState: State = {
	content: [],
	choices: [],
	dice: { a: 0, b: 0, dThree: 0 },
	character: {
		attributes: {
			skill: 0,
			stamina: 0,
			luck: 0,
		},
	},
};

export type AttributeUpdate = {
	name: keyof State['character']['attributes'];
	value: number;
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
		setAttribute: (state, action: PayloadAction<AttributeUpdate>) => {
			const { name, value } = action.payload;
			state.character.attributes[name] = value;
		},
	},
});

export const { addContent, setChoices, setDice, setAttribute } =
	stateSlice.actions;
export default stateSlice.reducer;
