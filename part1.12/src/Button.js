const Button = ({ name, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Button;