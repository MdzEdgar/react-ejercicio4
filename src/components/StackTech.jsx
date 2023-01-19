function StackTech() {
  const stack = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  return (
    <div className="card">
      <h2>Mi Stack Tech</h2>
      <ul>
        <li>{stack[0]}</li>
        <li>{stack[1]}</li>
        <li>{stack[2]}</li>
        <li>{stack[3]}</li>
        <li>{stack[4]}</li>
      </ul>
    </div>
  );
}

export default StackTech;
