import React from 'react'

const Hobbies = () => {
  const hobbies = ['Leer', 'Ver series', 'Ejercicio', 'Investigar', '']
  
  return (
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
  )
}

export default Hobbies