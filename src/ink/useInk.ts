import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Choice, Content } from '../store/reducers';
import inkStory from './inkStory';

type Func = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	func(...args: any[]): void;
	lookaheadSafe?: boolean;
};

function useInk<V extends string>({
	variables,
	functions,
}: {
	variables: V[];
	functions: Func[];
}) {
	const [data, setData] = useState<Record<V, string>>(
		() =>
			variables.reduce(
				(obj, key) => ({ ...obj, [key]: '' }),
				{} as Partial<Record<V, string>>,
			) as Record<V, string>,
	);
	const [content, setContent] = useState<Content[]>([]);
	const [choices, setChoices] = useState<Choice[]>([]);

	const continueStory = () => {
		while (inkStory.canContinue) {
			const text = inkStory.Continue();
			if (text === null) continue; // It won't be, because we test this at the top of the while loop, but TS doesn't know that
			setContent((prev_content) => [
				...prev_content,
				{ text, index: uuidv4() },
			]);
			// console.log('Tags: ', inkStory.currentTags);
		}
		const choices: Choice[] = inkStory.currentChoices.map((choice) => {
			return {
				text: choice.text,
				index: choice.index,
			};
		});
		setChoices(choices);
	};

	useEffect(() => {
		const updateData = (
			name: string,
			source_value: string | Map<string, string> | number,
		) => {
			// TODO: Handle arrays when multiple values can be selected at once
			// Check the spec for what data types are allowed
			// Can types be used to enforce the type from the ink file?
			console.log({ name, source_value, type: typeof source_value });

			let value: string;
			if (typeof source_value === 'string') value = source_value;
			else if (typeof source_value === 'number')
				value = `${source_value}`;
			else if ('keys' in source_value)
				value = JSON.parse(source_value.keys().next().value).itemName;
			else value = `${source_value}`;

			setData((prev) => ({
				...prev,
				[name]: value,
			}));
		};

		variables.forEach((variable_name: string) => {
			inkStory.ObserveVariable(variable_name, updateData);
		});

		functions.forEach(({ name, func, lookaheadSafe = false }) => {
			inkStory.BindExternalFunction(name, func, lookaheadSafe);
		});

		// TODO Can we unbind everything when unmounted?
		return () => {
			/* ... */
		};
	}, []);
	useEffect(() => continueStory(), []); // Update content on initial load

	const choose = useCallback((index: number) => {
		inkStory.ChooseChoiceIndex(index);
		// dispatch(setTextPrompt(null)); // Clear a text input if we have one
		continueStory();
	}, []);
	return { continueStory, choose, data, content, choices };
}

export default useInk;
