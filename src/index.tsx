import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV !== 'production') {
	console.log('⚠️ Running in development mode');
}

const container = document.getElementById('root');
if (!container) throw new Error("Could not find an element with the id 'root'.");

const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
