import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';

export const CharacterSheetContainer = styled.div``;

const CharacterSheet = () => {
	const character = useSelector((state: RootState) => state.state.character);
	const { attributes } = character;
	return (
		<CharacterSheetContainer>
			{Object.entries(attributes)
				.filter((x) => x[1] > 0)
				.map(([name, value]) => (
					<p>
						{name}: {value}
					</p>
				))}
		</CharacterSheetContainer>
	);
};

export default CharacterSheet;
