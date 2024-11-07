import './App.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
<ShoppingCartProvider>
<App/>
</ShoppingCartProvider>);
