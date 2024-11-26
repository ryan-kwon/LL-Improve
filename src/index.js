import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import App from './App';

import Layout from '../components/layouts/layout';

import styles from "./styles/style.css"

function App() {
  return (
    <Layout />
    
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // Create a root for rendering
root.render(<App />);
