import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

if (process.env.NODE_ENV !== 'production') {
	console.info('⚠️ Running in development mode');
}

const container = document.getElementById('root');
if (!container)
	throw new Error("Could not find an element with the id 'root'.");

const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
