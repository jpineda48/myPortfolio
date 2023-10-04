
import './App.css';
import Intro from './Componants/Intro/intro';
import About from './Componants/About/About';
import ProductList from './Componants/ProductList/ProductList';
import Contact from './Componants/Contact/Contact';
import Toggle from './Componants/Toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from './context';



function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  
  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', 
    color: darkMode && 'white'}}>
      
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
