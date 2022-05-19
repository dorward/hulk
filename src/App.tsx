import { StrictMode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import CharacterSheet from './components/CharacterSheet';
import Choices from './components/Choices';
import Dice from './components/Dice';
import Story from './components/Story';
import Wrapper from './components/Wrapper';
import useInk from './ink/useInk';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
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
	});

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
