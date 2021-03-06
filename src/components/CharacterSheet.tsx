import styled from 'styled-components';

import { Character } from '../types';

export const CharacterSheetContainer = styled.div`
	h2 {
		text-align: center;
	}
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

type Props = {
	character: Character;
};

type AttributesProps = Pick<Character, 'attributes'>;

const Attributes = ({ attributes }: AttributesProps) => {
	return (
		<table>
			<tbody>
				{Object.entries(attributes)
					.filter((x) => x[1] > 0)
					.map(([name, value]) => (
						<tr key={name}>
							<th scope="row">{name}</th>
							<td>{value}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
};

const CharacterSheet = ({ character }: Props) => {
	const { attributes, name } = character;
	return (
		<CharacterSheetContainer>
			<h2>{name}</h2>

			{Object.keys(attributes).length && (
				<Attributes attributes={attributes} />
			)}
		</CharacterSheetContainer>
	);
};

export default CharacterSheet;
