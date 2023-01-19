const Card = ({info}) => {
  return (
    <div className="card">
      <h2>{info.title}</h2>
      <ul>
        <li>{info.info1}</li>
        <li>{info.info2}</li>
        <li>{info.info3}</li>
        <li>{info.info4}</li>
      </ul>
    </div>
  )
}

export default Card