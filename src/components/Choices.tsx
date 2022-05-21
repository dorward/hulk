import styled from 'styled-components';

import { TextPromptDataType } from '../inkTextPrompt/useTextPrompt';
import { Choice } from '../store/reducers';
import TextPrompt from './TextPrompt';

export const ChoicesContainer = styled.ul`
	list-style: none;
	text-align: center;
	margin: 0;
	padding: 3px 3px 0 3px;
`;

const Item = styled.li`
	button,
	input {
		border: none;
		background: ${(p) => p.theme.darkSoft};
		color: ${(p) => p.theme.lightBold};
		font-family: 'Space Mono', monospace;
		padding: 9px;
		margin: 9px 0;
		font-size: 1rem;
		display: block;
		width: 100%;
	}
`;

type Props = {
	choose(index: number): void;
	choices: Choice[];
	textPrompt?: TextPromptDataType;
	textPromptEventHandler: React.KeyboardEventHandler<HTMLInputElement>;
};

const Choices = ({
	choose,
	choices,
	textPrompt,
	textPromptEventHandler,
}: Props) => {
	return (
		<ChoicesContainer>
			{textPrompt && (
				<Item>
					<TextPrompt
						data={textPrompt}
						onKeyPress={textPromptEventHandler}
					/>
				</Item>
			)}
			{choices.map((choice) => (
				<Item key={choice.index}>
					<button onClick={() => choose(choice.index)}>
						{choice.text}
					</button>
				</Item>
			))}
		</ChoicesContainer>
	);
};

export default Choices;
