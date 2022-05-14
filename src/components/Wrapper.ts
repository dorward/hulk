import styled from 'styled-components';

import { CharacterSheetContainer } from './CharacterSheet';
import { ChoicesContainer } from './Choices';
import { DiceContainer } from './Dice';
import { StoryContainer } from './Story';

const Wrapper = styled.div`
    box-sizing: border: box;
	max-width: 60rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 3px;
	background: ${(p) => p.theme.darkBold};
	color: ${(p) => p.theme.lightSoft};
	// display: flex;
	// flex-direction: column;
	display: grid; 
	grid-template-columns: 14em 1fr; 
	grid-template-rows: min-content 1fr min-content; 
	gap: 0px 0px; 
	grid-template-areas: 
	  "Dice Heading"
	  "Character Story"
	  "Character Choices"; 

	  ${DiceContainer} { grid-area: Dice; }
	  h1 { grid-area: Heading; }
	  ${CharacterSheetContainer} { grid-area: Character; }
	  ${StoryContainer} { grid-area: Story; }
	  ${ChoicesContainer} { grid-area: Choices; }
`;

export default Wrapper;
