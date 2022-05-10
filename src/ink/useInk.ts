import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import content, { add } from '../store/content';
import inkStory from './inkStory';

const useInk = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		while (inkStory.canContinue) {
			const content = inkStory.Continue();
			dispatch(add(content));
			// const p = document.createElement('p');
			// p.textContent = content;
			// processTags(inkStory.currentTags);
			// document.querySelector('#story').appendChild(p);
		}
	}, []);
};

export default useInk;
