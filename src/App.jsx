import './App.css'
import Card from './components/Card';
import FavoriteFood from './components/FavoriteFood'
import Hobbies from './components/Hobbies';
import Personal from './components/Personal';
import StackTech from './components/StackTech';

function App() {
  const personalInfo = {
    title: 'Personal',
    info1: "Edgar Méndez",
    info2: 31,
    info3: "Reservoir Dogs",
    info4: "Clasica",
  }
  const hobbiesInfo = {
    title: 'Hobbies',
    info1: "Leer",
    info2: "Ver series",
    info3: "Ejercicio",
    info4: "Investigar",
  }
  const foodInfo = {
    title: "Comida favorita",
    info1: "Tacos",
    info2:  "Hamburguesa de pollo",
    info3: "Carne asada",
    info4: "Mariscos",
  }
  const stackInfo = {
    title: 'My Stack Tech',
    info1: "HTML",
    info2:  "CSS", 
    info3: "JavaScript",
    info4: "React"
  }
  
  return (
    <div className="App">
      <div className="container">
        <Card info={personalInfo} classColor="personal" />

        <Card info={hobbiesInfo} classColor="hobbies"/>

        <Card info={foodInfo} classColor="food"/>
        
        <Card info={stackInfo} classColor="stack"/>
      </div>
    </div>
  )
}

export default App
