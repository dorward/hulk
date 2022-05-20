import { Story } from 'inkjs/engine/Story';
import { useState } from 'react';

type TextPromptData = {
	var_name: string;
	message: string;
	next_knot: string;
};

type HandlerProps = {
	inkStory: Story;
	continueStory(): null;
};

const useTextPrompt = () => {
	const [textPromptData, setTextPromptData] = useState<TextPromptData | null>(
		null,
	);

	const textPromptInkFunction = (
		var_name: string,
		message: string,
		next_knot: string,
	) => {
		setTextPromptData({ var_name, message, next_knot });
	};

	const textPromptEventHandlerFactory =
		({ inkStory, continueStory }: HandlerProps) =>
		(event: React.KeyboardEvent) => {
			const { value } = event.currentTarget as HTMLInputElement;
			if (
				event.key === 'Enter' &&
				!value.match(/^\s*$/) &&
				textPromptData
			) {
				inkStory.variablesState.$(textPromptData.var_name, value);
				inkStory.ChoosePathString(textPromptData.next_knot);
				setTextPromptData(null);
				continueStory();
			}
		};

	return {
		textPromptData,
		textPromptInkFunction,
		textPromptEventHandlerFactory,
	};
};

export default useTextPrompt;
