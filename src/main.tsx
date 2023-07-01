import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
