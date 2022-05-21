import React from 'react';
import styled from 'styled-components';

import { TextPromptDataType } from '../inkTextPrompt/useTextPrompt';

type Props = {
	data: TextPromptDataType;
	onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
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

const TextPrompt = ({ data, onKeyPress }: Props) => {
	return (
		<TextPromptContainer>
			<label htmlFor="textPrompt">{data.message}</label>
			<input id="textPrompt" onKeyPress={onKeyPress} />
		</TextPromptContainer>
	);
};

export default TextPrompt;
