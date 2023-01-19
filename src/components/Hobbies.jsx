const Hobbies = (props) => {
  const hobbies = ["Leer", "Ver series", "Ejercicio", "Investigar", ""];

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <ul>
        <li>{hobbies[0]}</li>
        <li>{hobbies[1]}</li>
        <li>{hobbies[2]}</li>
        <li>{hobbies[3]}</li>
        <li>{hobbies[4]}</li>
      </ul>
    </div>
  );
};

export default Hobbies;
