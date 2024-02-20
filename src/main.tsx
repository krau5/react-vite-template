import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'app';
import { store } from 'store';
import { UIProvider } from 'components/UIProvider';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

root.render(
  <Provider store={store}>
    <UIProvider>
      <App />
    </UIProvider>
  </Provider>,
);
