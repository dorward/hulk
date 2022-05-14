import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';

export const DiceContainer = styled.div`
	&:not(:empty) {
		border: solid ${(p) => p.theme.lightBold} 1px;
	}
	padding: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	margin: auto;
`;

type DieProps = {
	size: number;
};

const Die = styled.div<DieProps>`
	font-size: 2rem;
	text-align: center;
	margin: 3px;
	width: 4rem;
	border: solid ${(p) => p.theme.lightBold} 1px;
	background: ${(p) => (p.size === 6 ? 'white' : 'black')};
	color: ${(p) => (p.size === 6 ? 'black' : 'white')};
`;

const Dice = () => {
	const state = useSelector((state: RootState) => state.state.dice);
	const values = [
		{ size: 6, value: state.a },
		{ size: 6, value: state.b },
		{ size: 3, value: state.dThree },
	];

	return (
		<DiceContainer>
			{values
				.filter(({ value }) => value > 0)
				.map(({ size, value }, index) => (
					<Die key={index} size={size}>
						{value}
					</Die>
				))}
		</DiceContainer>
	);
};

export default Dice;
