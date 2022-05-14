import * as Inkjs from 'inkjs';

import data from '../../hulk.ink';

const inkStory = new Inkjs.Compiler(data).Compile();
export default inkStory;
