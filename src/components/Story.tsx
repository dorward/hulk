import styled from 'styled-components';

import { Content } from '../types';

export const StoryContainer = styled.div`
	flex: 1 1 auto;
`;

const Story = ({ content }: { content: Content[] }) => {
	return (
		<StoryContainer>
			{content.slice(-10).map((content) => (
				<p key={content.index}>{content.text}</p>
			))}
		</StoryContainer>
	);
};

export default Story;
