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
		[K in AttributeName]: number;
	};
	name: string;
};
