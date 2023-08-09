
import './App.css';
import { ItemlistContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
function App() {
  return (
    <>
    <NavBar/>
    <ItemlistContainer greeting='hello!'/>
    </>
  );
}

export default App;
