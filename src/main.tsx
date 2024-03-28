import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AddUsedBook from './Pages/UsedBooks/UseBookCreate/index.tsx';
import './index.css';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/color.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
// import Robot from './components/Robot/Robot.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
