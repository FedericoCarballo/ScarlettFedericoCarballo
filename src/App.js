import Navbar from './components/Navbar.jsx/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';



function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<ItemListContainer/>}/>
  <Route path='/tortas/:tortasId' element={<ItemListContainer/>}/>
  <Route path='/' element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
