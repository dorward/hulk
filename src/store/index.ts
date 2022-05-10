import { configureStore } from '@reduxjs/toolkit';
import content from './content';
import choices from './choices';

export const store = configureStore({
	reducer: { choices, content },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
