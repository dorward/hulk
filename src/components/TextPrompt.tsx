import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setTextPrompt } from '../../src/store/reducers';
import inkStory from '../ink/inkStory';
import { updateContent } from '../ink/useInk';
import { TextPrompt as TextPromptType } from '../store/reducers';

type Props = {
	prompt: TextPromptType;
};

const TextPromptContainer = styled.div`
	display: flex;
	width: 100%;
	align-content: stretch;
	align-items: center;
	label {
		flex: 0 1 auto;
		padding-right: 3px;
		white-space: nowrap;
	}
	input {
		flex: 1 1 auto;
		padding: 9px;
	}
`;

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
		<TextPromptContainer>
			<label htmlFor="textPrompt">{prompt.message}</label>
			<input id="textPrompt" onKeyPress={handler} />
		</TextPromptContainer>
	);
};

export default TextPrompt;
