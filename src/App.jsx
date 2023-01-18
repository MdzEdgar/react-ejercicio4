import './App.css'

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

  const handleClick = () => {
    alert('Me gustan los tacos.')
  }

  return (
    <div className="App">
      <div className="container">
      <div className="card">
      <ul>
        <h2>Personal</h2>
        <li>{person.name}</li>
        <li>{person.age} años</li>
        <li>{person.fav}</li>
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
      <div onClick={handleClick} className="card">
        <h2>Comida favorita</h2>
        <ul>
        <li>{person.comidas[0]}</li>
        <li>{person.comidas[1]}</li>
        <li>{person.comidas[2]}</li>
        <li>{person.comidas[3]}</li>
        <li>{person.comidas[4]}</li>
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
      </div>
      
    </div>
  )
}

export default App
