import { StrictMode } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import CharacterSheet from './components/CharacterSheet';
import Dice from './components/Dice';
import Story from './components/Story';
import TextPrompt from './components/TextPrompt';
import Wrapper from './components/Wrapper';
import useInk from './ink/useInk';
import { RootState } from './store';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
	const state = useSelector((state: RootState) => state.state);
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
					<div id="choices">
						{state.textPrompt && (
							<TextPrompt prompt={state.textPrompt} />
						)}
						{state.choices.map((choice) => (
							<button
								key={choice.index}
								onClick={() => choose(choice.index)}
							>
								{choice.text}
							</button>
						))}
					</div>
				</Wrapper>
			</StrictMode>
		</ThemeProvider>
	);
};

export default App;
