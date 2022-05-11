import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border: box;
	max-width: 60rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 3px;
	background: ${(p) => p.theme.darkBold};
	color: ${(p) => p.theme.lightSoft};
	display: flex;
	flex-direction: column;
`;

export default Wrapper;
