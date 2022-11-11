import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Navbar from './layouts/Navbar';
import Products from './pages/products/index'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/details:id' element={<Detail/>} />
      <Route exact path='/productos' element={<Products/>} />
    </Routes>

    </>
  );
}

export default App;
