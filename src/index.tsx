import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error("Could not find an element with the id 'root'.");
const root = createRoot(container);
root.render(<App />);
