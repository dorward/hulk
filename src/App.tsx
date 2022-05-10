import React from 'react';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import useInk from './ink/useInk';

const App = () => {
	const contentState = useSelector((state: RootState) => state.content);
	const choicesState = useSelector((state: RootState) => state.choices);
	useInk();

	return (
		<>
			<h1>Hulk</h1>
			<div id="story">
				{contentState.content.map(string => (
					<p>{string}</p>
				))}
			</div>
			<div id="choices">
				{choicesState.choices.map(choice => (
					<button>{choice.text}</button>
				))}
			</div>
		</>
	);
};

export default App;
