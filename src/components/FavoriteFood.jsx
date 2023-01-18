const FavoriteFood = () => {
  const comidas = ['Tacos' , 'Hamburguesa de pollo', 'Carne asada', 'Mariscos', 'Chocolate']
  return(
    <div className="card">
        <h2>Comida favorita</h2>
        <ul>
        <li>{comidas[0]}</li>
        <li>{comidas[1]}</li>
        <li>{comidas[2]}</li>
        <li>{comidas[3]}</li>
        <li>{comidas[4]}</li>
        </ul>
    </div>
  )
}

export default FavoriteFood