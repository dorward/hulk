import { useSelector } from 'react-redux';

import { RootState } from '../store';

const CharacterSheet = () => {
	const character = useSelector((state: RootState) => state.state.character);
	const { attributes } = character;
	return (
		<div>
			{Object.entries(attributes)
				.filter((x) => x[1] > 0)
				.map(([name, value]) => (
					<p>
						{name}: {value}
					</p>
				))}
		</div>
	);
};

export default CharacterSheet;
