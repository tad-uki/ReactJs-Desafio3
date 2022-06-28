//@ts-check
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <main> 
      <NavBar/>
      
      <ItemListContainer greeting={"Este es un placeholder!!!!"} />
    </main>
  );
}

export default App;
