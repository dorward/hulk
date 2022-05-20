import { StrictMode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import CharacterSheet from './components/CharacterSheet';
import Choices from './components/Choices';
import Dice from './components/Dice';
import Story from './components/Story';
import Wrapper from './components/Wrapper';
import useInk from './ink/useInk';
import useTextPrompt from './inkTextPrompt/useTextPrompt';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
	const { textPromptInkFunction } = useTextPrompt();
	const { choose, content, choices, data } = useInk({
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
				function: textPromptInkFunction,
			},
		],
	});

	const { dice_a, dice_b } = data;

	console.log({ dice_a, dice_b });

	useEffect(() => {
		console.log({ data });
	}, [data]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StrictMode>
				<Wrapper>
					<h1>Hulk</h1>
					<Dice />
					<CharacterSheet />
					<Story content={content} />
					<Choices choose={choose} choices={choices} />
				</Wrapper>
			</StrictMode>
		</ThemeProvider>
	);
};

export default App;
