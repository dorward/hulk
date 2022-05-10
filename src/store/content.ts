import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContentState {
	content: string[];
}

const initialState: ContentState = {
	content: [],
};

export const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			state.content.push(action.payload);
		},
	},
});

export const { add } = contentSlice.actions;
export default contentSlice.reducer;
