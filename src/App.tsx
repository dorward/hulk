import { StrictMode } from 'react';
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
	const { choose } = useInk();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StrictMode>
				<Wrapper>
					<h1>Hulk</h1>
					<Dice />
					<CharacterSheet />
					<Story />
					<Choices choose={choose} />
				</Wrapper>
			</StrictMode>
		</ThemeProvider>
	);
};

export default App;
