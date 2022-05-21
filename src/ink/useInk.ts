import * as Inkjs from 'inkjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Choice, Content } from '../types';

export type InkListType = Map<string, string>;
export type InkDataType = string | number | InkListType;

type Func = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	func(...args: any[]): any;
	lookaheadSafe?: boolean;
};

function useInk<V extends string>({
	ink,
	variables,
	functions,
}: {
	ink: string;
	variables: V[];
	functions: Func[];
}) {
	const inkStory = useMemo(() => new Inkjs.Compiler(ink).Compile(), [ink]);
	const [data, setData] = useState<Record<V, InkDataType>>(
		() =>
			variables.reduce(
				(obj, key) => ({ ...obj, [key]: undefined }),
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
		const updateData = (name: string, value: InkDataType) => {
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

		continueStory();

		return () => {
			variables.forEach((variable_name: string) => {
				inkStory.RemoveVariableObserver(updateData, variable_name);
			});
			functions.forEach(({ name }) => {
				inkStory.UnbindExternalFunction(name);
			});
		};
	}, []);

	const choose = useCallback((index: number) => {
		inkStory.ChooseChoiceIndex(index);
		continueStory();
	}, []);
	return { continueStory, choose, data, content, choices, inkStory };
}

export default useInk;
