import Navbar from './components/Navbar.jsx/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import Footer from './components/Footer.jsx/Footer';



function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<ItemListContainer/>}/>
  <Route path='/tortas/:tortasId' element={<ItemListContainer/>}/>
  <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
  {/* <Route path='/cart' element={<Cart/>} /> */}
</Routes>
<Footer/>
</BrowserRouter>
    </>
  );
}

export default App;
