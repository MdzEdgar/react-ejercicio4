import React from 'react'

const Hobbies = () => {
  const hobbies = ['Leer', 'Ver series', 'Ejercicio', 'Investigar', '']

  return (
    <div className="card">
        <h2>Hobbies</h2>
        <ul>
          <li>{hobbies[0]}</li>
          <li>{hobbies[1]}</li>
          <li>{hobbies[2]}</li>
          <li>{hobbies[3]}</li>
          <li>{hobbies[4]}</li>
        </ul>
      </div>
  )
}

export default Hobbies