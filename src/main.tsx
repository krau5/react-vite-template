import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

root.render(<p>Hello, world</p>);
