import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/content';
import { setChoices } from '../store/choices';
import inkStory from './inkStory';

const useInk = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		while (inkStory.canContinue) {
			const content = inkStory.Continue();
			if (content === null) continue; // It won't be, because we test this at the top of the while loop, but TS doesn't know that
			dispatch(add(content));
			// processTags(inkStory.currentTags);
		}
		const choices = inkStory.currentChoices.map(choice => {
			return {
				text: choice.text,
			};
		});

		console.log(choices);
		dispatch(setChoices(choices));
	}, []);
};

export default useInk;
