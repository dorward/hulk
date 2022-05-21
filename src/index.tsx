import { createRoot } from 'react-dom/client';

import App from './App';

if (process.env.NODE_ENV !== 'production') {
	console.info('⚠️ Running in development mode');
}

const container = document.getElementById('root');
if (!container)
	throw new Error("Could not find an element with the id 'root'.");

const root = createRoot(container);
root.render(<App />);
