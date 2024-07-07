import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import { UIProvider } from 'components/UIProvider';
import type { router } from 'app';
import { App } from 'app';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootNode = document.getElementById('root');

const root = createRoot(rootNode!);

root.render(
  <Provider store={store}>
    <UIProvider>
      <App />
    </UIProvider>
  </Provider>,
);
