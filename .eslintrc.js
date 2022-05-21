module.exports = {
	root: true,
	env: {
		browser: false,
		commonjs: true,
		es2021: true,
	},
	rules: {
		'no-console': ['error', { allow: ['info', 'error'] }],
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
};
