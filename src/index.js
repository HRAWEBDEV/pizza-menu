import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { pizzaData } from './data';

import './index.css';

const Header = () => {
 return (
  <header className='header'>
   <h1>Fast React pizza Co.</h1>
  </header>
 );
};

const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
 return (
  <div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
   <img src={photoName} alt={name} />
   <div>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <span>{soldOut ? 'sold out' : price}</span>
   </div>
  </div>
 );
};

const Menu = () => {
 return (
  <main className='menu'>
   <h2>our menu</h2>
   <div className='pizzas'>
    {pizzaData.length ? (
     pizzaData.map(({ name, ...other }) => (
      <Pizza key={name} name={name} {...other} />
     ))
    ) : (
     <p> we are still working on the menu, please come back later</p>
    )}
   </div>
  </main>
 );
};

const Footer = () => {
 return (
  <footer className='footer'>
   <p>{new Date().toLocaleTimeString()} We'r currently open</p>
  </footer>
 );
};

const App = () => {
 return (
  <div className='container'>
   <Header />
   <Menu />
   <Footer />
  </div>
 );
};

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl);
reactRoot.render(
 <StrictMode>
  <App />
 </StrictMode>
);
