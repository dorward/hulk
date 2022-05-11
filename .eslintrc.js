module.exports = {
	root: true,
	env: {
		browser: false,
		commonjs: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
};
