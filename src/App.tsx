import React from 'react';
import { RootState } from './store';
import { useSelector } from 'react-redux';
import useInk from './ink/useInk';

const App = () => {
	const contentState = useSelector((state: RootState) => state.content);
	useInk();

	return (
		<>
			<h1>Hulk</h1>
			{contentState.content.map(string => (
				<p>{string}</p>
			))}
		</>
	);
};

export default App;
