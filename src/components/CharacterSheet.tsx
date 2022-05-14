import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';
import { Character } from '../store/reducers';

export const CharacterSheetContainer = styled.div`
	table {
		width: 100%;
		border-spacing: 6px 3px;
		th {
			text-transform: capitalize;
			text-align: right;
			width: 50%;
		}
	}
`;

type AttributesProps = Pick<Character, 'attributes'>;

const Attributes = ({ attributes }: AttributesProps) => {
	return (
		<table>
			{Object.entries(attributes)
				.filter((x) => x[1] > 0)
				.map(([name, value]) => (
					<tr>
						<th scope="row">{name}</th>
						<td>{value}</td>
					</tr>
				))}
		</table>
	);
};

const CharacterSheet = () => {
	const character = useSelector((state: RootState) => state.state.character);
	const { attributes } = character;
	return (
		<CharacterSheetContainer>
			{Object.keys(attributes).length && (
				<Attributes attributes={attributes} />
			)}
		</CharacterSheetContainer>
	);
};

export default CharacterSheet;
