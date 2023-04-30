const Percentage = ({ text, per, total }) => {
  const percent = (per / total) * 100
  return (
    <p>
      {text} {percent} %
    </p>
  )
}

export default Percentage