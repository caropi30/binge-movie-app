import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Header } from "./components/Header";
import { NavigationBar } from "./components/Navigation";
import HomePage  from "./pages/home";
import BookedPage from "./pages/booked";
import Account from "./pages/auth";
import MoviesPage from "./pages/movies";
import TvsPage from "./pages/tvs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
 { path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader(queryClient),
    // action: rootAction(queryClient),
  children:[
    {
      index: true,
      element: <HomePage />,
    },
  {
    path: "/booked",
    element:<BookedPage />,
  },
  {
    path: "/movies",
    element:<MoviesPage />,
  },
  {
    path: "/tv",
    element:<TvsPage />,
  },

  ]},
  {
    path: "/auth",
    element:<Account />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>  
  </React.StrictMode>,
)
