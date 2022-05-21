import { StrictMode } from 'react';
import { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import rawInk from '../hulk.ink';
import CharacterSheet from './components/CharacterSheet';
import Choices from './components/Choices';
import Dice from './components/Dice';
import Story from './components/Story';
import Wrapper from './components/Wrapper';
import useInk from './ink/useInk';
import useTextPrompt from './inkTextPrompt/useTextPrompt';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';
import { Character } from './types';

const App = () => {
	const {
		textPromptInkFunction,
		textPromptEventHandlerFactory,
		textPromptData,
	} = useTextPrompt();
	const { choose, content, choices, continueStory, inkStory } = useInk({
		ink: rawInk,
		variables: [
			'dice_a',
			'dice_b',
			'dice_dThree',
			'attribute_skill',
			'attribute_stamina',
			'attribute_luck',
			'char_name',
		],
		functions: [
			{
				name: 'text_prompt',
				func: textPromptInkFunction,
			},
		],
	});
	const textPromptEventHandler = useCallback(
		textPromptEventHandlerFactory({
			inkStory,
			continueStory,
		}),
		[textPromptEventHandlerFactory, inkStory, continueStory],
	);
	const character: Character = {
		name: 'placeholder',
		attributes: {
			skill: 1,
			luck: 1,
			stamina: 1,
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StrictMode>
				<Wrapper>
					<h1>Hulk</h1>
					<Dice a={1} b={2} dThree={3} />
					<CharacterSheet character={character} />
					<Story content={content} />
					<Choices
						choose={choose}
						choices={choices}
						textPrompt={textPromptData}
						textPromptEventHandler={textPromptEventHandler}
					/>
				</Wrapper>
			</StrictMode>
		</ThemeProvider>
	);
};

export default App;
