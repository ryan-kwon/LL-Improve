import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Layout from '../components/layouts/layout';
import ErrorBoundary from './errorboundary';

import styles from "./styles/style.css"


const container = document.getElementById("root");
const root = createRoot(container); // Create a root for rendering

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ErrorBoundary>
);

// const App = () => (
//   <BrowserRouter>
//     <Layout />
//   </BrowserRouter>
// );

// function App() {
//   return (
//     <Layout />
    
//   );
// }

// const container = document.getElementById('root');
// const root = createRoot(container); // Create a root for rendering
// root.render(<App />);
