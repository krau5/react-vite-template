import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from 'routeTree.gen';

export const router = createRouter({ routeTree });

export const App = () => <RouterProvider router={router} />;
