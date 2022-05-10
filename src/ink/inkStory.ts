import data from '../../hulk.ink.json';
console.log({ data });
import * as Inkjs from 'inkjs';
console.log({ Inkjs });
const inkStory = new Inkjs.Story(data);
export default inkStory;
