import './App.css'
import FavoriteFood from './components/FavoriteFood'
import Hobbies from './components/Hobbies';
import Personal from './components/Personal';
import StackTech from './components/StackTech';

function App() {
  

  //Hacer un componente por cada tarjeta/card

  return (
    <div className="App">
      <div className="container">
        <Personal />

        <Hobbies />

        <FavoriteFood />
        
        <StackTech />
      </div>
    </div>
  )
}

export default App
