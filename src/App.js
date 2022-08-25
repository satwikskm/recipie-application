import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductInfo from './components/ProductInfo/ProductInfo';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path='products' element={<ProductInfo />}/>
            <Route path='/' element={<Home />}/>
        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
