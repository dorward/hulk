import * as s from 'superstruct';

import { InkDataType } from './ink/useInk';

export type Content = {
	text: string;
	index: string;
};

export type Choice = {
	text: string;
	index: number;
};

export type AttributeName = 'skill' | 'stamina' | 'luck';

export type Character = {
	attributes: {
		[K in AttributeName]?: number;
	};
	name?: string;
};

type UntestedInkDataStructure = {
	dice_a: InkDataType;
	dice_b: InkDataType;
	dice_dThree: InkDataType;
	attribute_skill: InkDataType;
	attribute_stamina: InkDataType;
	attribute_luck: InkDataType;
	char_name: InkDataType;
};

export type InkDataStructure = {
	dice_a?: number;
	dice_b?: number;
	dice_dThree?: number;
	attribute_skill?: number;
	attribute_stamina?: number;
	attribute_luck?: number;
	char_name?: string;
};

const InkDataStructureSchema = s.object({
	dice_a: s.optional(s.number()),
	dice_b: s.optional(s.number()),
	dice_dThree: s.optional(s.number()),
	attribute_skill: s.optional(s.number()),
	attribute_stamina: s.optional(s.number()),
	attribute_luck: s.optional(s.number()),
	char_name: s.optional(s.string()),
});

export const isValid = (
	data: InkDataStructure | UntestedInkDataStructure,
): data is InkDataStructure => {
	try {
		console.log({ data });
		s.assert(data, InkDataStructureSchema);
		return true;
	} catch (e) {
		console.error(e);
		return false;
	}
};
