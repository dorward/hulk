import { Dispatch, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/content';
import { setChoices, Choice } from '../store/choices';
import inkStory from './inkStory';
import { AnyAction } from '@reduxjs/toolkit';

const updateContent = (dispatch: Dispatch<AnyAction>) => {
	while (inkStory.canContinue) {
		const content = inkStory.Continue();
		if (content === null) continue; // It won't be, because we test this at the top of the while loop, but TS doesn't know that
		dispatch(add(content));
		// processTags(inkStory.currentTags);
	}
	const choices: Choice[] = inkStory.currentChoices.map(choice => {
		return {
			text: choice.text,
			index: choice.index,
		};
	});
	dispatch(setChoices(choices));
};

const useInk = () => {
	const dispatch = useDispatch();
	useEffect(() => updateContent(dispatch), []); // Update content on initial load

	const choose = useCallback((index: number) => {
		inkStory.ChooseChoiceIndex(index);
		updateContent(dispatch);
	}, []);
	return { choose };
};

export default useInk;
