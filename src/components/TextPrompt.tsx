import React from 'react';
import { useDispatch } from 'react-redux';

import { setTextPrompt } from '../../src/store/reducers';
import inkStory from '../ink/inkStory';
import { updateContent } from '../ink/useInk';
import { TextPrompt as TextPromptType } from '../store/reducers';

type Props = {
	prompt: TextPromptType;
};

const TextPrompt = ({ prompt }: Props) => {
	const dispatch = useDispatch();
	const handler = (event: React.KeyboardEvent) => {
		const { value } = event.currentTarget as HTMLInputElement;
		if (event.key === 'Enter' && !value.match(/^\s*$/)) {
			inkStory.variablesState.$(prompt.var_name, value);
			dispatch(setTextPrompt(null));
			inkStory.ChoosePathString(prompt.next_knot);
			updateContent(dispatch);
		}
	};
	return (
		<>
			<label htmlFor="textPrompt">{prompt.message}</label>
			<input id="textPrompt" onKeyPress={handler} />
		</>
	);
};

export default TextPrompt;
