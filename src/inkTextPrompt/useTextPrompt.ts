import { Story } from 'inkjs/engine/Story';
import { useCallback, useState } from 'react';

export type TextPromptDataType = null | {
	var_name: string;
	message: string;
	next_knot: string;
};

type HandlerProps = {
	inkStory: Story;
	continueStory(): void;
};

const useTextPrompt = () => {
	const [textPromptData, setTextPromptData] =
		useState<TextPromptDataType>(null);

	const clearTextPrompt = useCallback(() => setTextPromptData(null), []);

	const textPromptInkFunction = useCallback(
		(var_name: string, message: string, next_knot: string) => {
			setTextPromptData({ var_name, message, next_knot });
		},
		[],
	);

	const textPromptEventHandlerFactory = useCallback(
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
					clearTextPrompt();
					continueStory();
				}
			},
		[clearTextPrompt, textPromptData],
	);

	return {
		textPromptData,
		textPromptInkFunction,
		textPromptEventHandlerFactory,
		clearTextPrompt,
	};
};

export default useTextPrompt;
