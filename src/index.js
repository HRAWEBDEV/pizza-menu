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

const Pizza = ({ name, ingredients, photoName, price }) => {
 return (
  <div className='pizza'>
   <img src={photoName} alt={name} />
   <div>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <span>{price}</span>
   </div>
  </div>
 );
};

const Menu = () => {
 return (
  <main className='menu'>
   <h2>our menu</h2>
   <div className='pizzas'>
    {pizzaData.map(({ name, ...other }) => (
     <Pizza key={name} name={name} {...other} />
    ))}
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
