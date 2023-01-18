import './App.css'
import FavoriteFood from './components/FavoriteFood'

function App() {
  const person = {
    name: 'Edgar Méndez',
    age: 31,
    favoriteMovie: "Reservoir Dogs",
    favoriteMusic: "Clasica",
    hobbies: ['Leer', 'Ver series', 'Ejercicio', 'Investigar', ''],
    comidas: ['Tacos' , 'Hamburguesa de pollo', 'Carne asada', 'Mariscos', 'Chocolate'],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  }

  return (
    <div className="App">
      <div className="container">
      <div className="card">
      <ul>
        <h2>Personal</h2>
        <li>{person.name}</li>
        <li>{person.age} años</li>
        <li>{person.favoriteMovie}</li>
        <li>{person.favoriteMusic}</li>
      </ul>
      </div>
      <div className="card">
        <h2>Hobbies</h2>
        <ul>
          <li>{person.hobbies[0]}</li>
          <li>{person.hobbies[1]}</li>
          <li>{person.hobbies[2]}</li>
          <li>{person.hobbies[3]}</li>
          <li>{person.hobbies[4]}</li>
        </ul>
      </div>
      
      <div className="card">
        <h2>Mi Stack Tech</h2>
        <ul>
          <li>{person.stack[0]}</li>
          <li>{person.stack[1]}</li>
          <li>{person.stack[2]}</li>
          <li>{person.stack[3]}</li>
          <li>{person.stack[4]}</li>
        </ul>
      </div>

      <FavoriteFood />
      </div>
    </div>
  )
}

export default App
