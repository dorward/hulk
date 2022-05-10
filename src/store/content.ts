import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Content = {
	text: string;
	index: string;
};
export interface ContentState {
	content: Content[];
}

const initialState: ContentState = {
	content: [],
};

export const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Content>) => {
			state.content.push(action.payload);
		},
	},
});

export const { add } = contentSlice.actions;
export default contentSlice.reducer;
