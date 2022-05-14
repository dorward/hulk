import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';
import TextPrompt from './TextPrompt';

export const ChoicesContainer = styled.div``;

type Props = {
	choose(index: number): void;
};

const Choices = ({ choose }: Props) => {
	const state = useSelector((state: RootState) => state.state);

	return (
		<ChoicesContainer>
			{state.textPrompt && <TextPrompt prompt={state.textPrompt} />}
			{state.choices.map((choice) => (
				<button key={choice.index} onClick={() => choose(choice.index)}>
					{choice.text}
				</button>
			))}
		</ChoicesContainer>
	);
};

export default Choices;
