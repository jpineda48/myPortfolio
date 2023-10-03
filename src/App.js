
import './App.css';
import Intro from './Componants/Intro/intro';
import About from './Componants/About/About';
import ProductList from './Componants/ProductList/ProductList';
import Contact from './Componants/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      
    </div>
  );
}

export default App;
