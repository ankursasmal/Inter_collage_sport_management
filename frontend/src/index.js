import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import Home from './components/HomePage/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Event from './components/EventPage/Event';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

// Fix: Use the `element` property for JSX and `Component` for components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
   { 
    path: "/sport",
    element: <App />, 
    children: [
      {
        path: "/sport/login",
        element: <Event />, 
      },  
      {
        path: "/sport/signup",
        element: <Footer />, 
      },
    ],
  
  },

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
