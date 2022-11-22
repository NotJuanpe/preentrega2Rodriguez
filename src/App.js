import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home/index'
import Detail from './components/detail/index'
import Navbar from './components/Navbar';
import Products from './components/home/index'
import Category from './components/category';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/details:id' element={<Detail/>} />
      <Route exact path='/productos' element={<Products/>}/>
      <Route exact path='/category:id' element={<Category/>}/>
    </Routes>

    </>
  );
}

export default App;
