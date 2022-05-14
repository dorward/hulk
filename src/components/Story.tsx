import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';

const StoryContainer = styled.div`
	flex: 1 1 auto;
`;

const Story = () => {
	const state = useSelector((state: RootState) => state.state);

	return (
		<StoryContainer>
			{state.content.slice(-10).map((content) => (
				<p key={content.index}>{content.text}</p>
			))}
		</StoryContainer>
	);
};

export default Story;
