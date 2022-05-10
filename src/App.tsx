import React from 'react';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import useInk from './ink/useInk';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Wrapper from './components/Wrapper';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
	const contentState = useSelector((state: RootState) => state.content);
	const choicesState = useSelector((state: RootState) => state.choices);
	const { choose } = useInk();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<h1>Hulk</h1>
				<div id="story">
					{contentState.content.map(content => (
						<p key={content.index}>{content.text}</p>
					))}
				</div>
				<div id="choices">
					{choicesState.choices.map(choice => (
						<button key={choice.index} onClick={() => choose(choice.index)}>
							{choice.text}
						</button>
					))}
				</div>
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
