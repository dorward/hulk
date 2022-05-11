import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';

const DiceContainer = styled.div`
	border: solid ${(p) => p.theme.lightBold} 1px;
	padding: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	margin: auto;
`;

const Die = styled.div`
	font-size: 2rem;
	text-align: center;
	margin: 3px;
	width: 4rem;
	border: solid ${(p) => p.theme.lightBold} 1px;
    1px;
`;

const Dice = () => {
	const state = useSelector((state: RootState) => state.state.dice);
	const values = [state.a, state.b];

	return (
		<DiceContainer>
			{values.map((value, index) => (
				<Die key={index}>{value}</Die>
			))}
		</DiceContainer>
	);
};

export default Dice;
