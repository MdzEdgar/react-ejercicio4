
const Personal = () => {
  const person = {
    name: 'Edgar Méndez',
    age: 31,
    favoriteMovie: "Reservoir Dogs",
    favoriteMusic: "Clasica"
  };

  return (
    <div className="card">
      <ul>
        <h2>Personal</h2>
        <li>{person.name}</li>
        <li>{person.age} años</li>
        <li>{person.favoriteMovie}</li>
        <li>{person.favoriteMusic}</li>
      </ul>
      </div>
  )
}

export default Personal