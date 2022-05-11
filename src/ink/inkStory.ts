import * as Inkjs from 'inkjs';

import data from '../../hulk.ink.json';

console.log({ data });

console.log({ Inkjs });
const inkStory = new Inkjs.Story(data);
export default inkStory;
