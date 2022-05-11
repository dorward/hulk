import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

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
			<Wrapper>
				<h1>Hulk</h1>
				<div id="story">
					{state.content.map((content) => (
						<p key={content.index}>{content.text}</p>
					))}
				</div>
				<div id="choices">
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
		</ThemeProvider>
	);
};

export default App;
