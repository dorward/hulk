module.exports = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: true,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
