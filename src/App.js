import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemlistContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { NavBar } from './componentes/NavBar';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemlistContainer greeting='hello!' />} />
        <Route path="/category/:id" element={<ItemlistContainer greeting='hello!' />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
