import { configureStore } from '@reduxjs/toolkit';

import choices from './choices';
import content from './content';

export const store = configureStore({
	reducer: { choices, content },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
