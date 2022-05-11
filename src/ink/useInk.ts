import { AnyAction } from '@reduxjs/toolkit';
import md5 from 'md5';
import { Dispatch, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Choice, addContent, setChoices, setDice } from '../store/reducers';
import inkStory from './inkStory';

const updateContent = (dispatch: Dispatch<AnyAction>) => {
	while (inkStory.canContinue) {
		const text = inkStory.Continue();
		if (text === null) continue; // It won't be, because we test this at the top of the while loop, but TS doesn't know that
		dispatch(addContent({ text, index: md5(text) }));
		// console.log('Tags: ', inkStory.currentTags);
	}
	const choices: Choice[] = inkStory.currentChoices.map((choice) => {
		return {
			text: choice.text,
			index: choice.index,
		};
	});
	dispatch(setChoices(choices));
};

const useInk = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// Monitor the dice
		inkStory.ObserveVariable('dice_a', (_name: string, a: number) => {
			dispatch(setDice({ a }));
		});
		inkStory.ObserveVariable('dice_b', (_name: string, b: number) => {
			dispatch(setDice({ b }));
		});
	}, []);
	useEffect(() => updateContent(dispatch), []); // Update content on initial load

	const choose = useCallback((index: number) => {
		inkStory.ChooseChoiceIndex(index);
		updateContent(dispatch);
	}, []);
	return { choose };
};

export default useInk;
