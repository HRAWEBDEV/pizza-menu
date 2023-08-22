import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { pizzaData } from './data';

import './index.css';

const Pizza = () => {
 return (
  <div>
   <img src='pizzas/spinaci.jpg' alt='Pizza spinaci' />
   <h2>pizza Spinaci</h2>
   <p>Tomato, mozarella, spanish, and ricotta cheese</p>
  </div>
 );
};

const App = () => {
 return (
  <>
   <h1>react app template</h1>
   <Pizza />
  </>
 );
};

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl);
reactRoot.render(
 <StrictMode>
  <App />
 </StrictMode>
);
