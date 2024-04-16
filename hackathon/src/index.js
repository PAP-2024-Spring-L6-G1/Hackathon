import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NavBar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import Footer from './components/Footer/Footer';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/", // This is the relative URL path which users can bookmark and navigate to
    element: <Home /> // This is the React Component to load when navigating to the associated path URL
  },
  {
    path: "/teams", // This is the relative URL path which users can bookmark and navigate to
    element: <Teams /> // This is the React Component to load when navigating to the associated path URL
  }
  ,
  {
    path: "/teams/:name", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  }
  ,
  {
    path: "/login", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  }
  ,
  {
    path: "/logout", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  },
  {
    path: "/signup", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  },
  {
    path: "/admin", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  }
  // More routes...
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
