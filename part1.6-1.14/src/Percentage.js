const Percentage = ({ text, per, total }) => {
  const percent = (per / total) * 100
  return (
    <tr>
      <td>{text}</td>
      <td>{percent} %</td>
    </tr>
  )
}

export default Percentage