
const Card = (props) => {
  return (
    <div className={`bg-stone-400 p-5 rounded-xl ${props.className}` }>{props.children}</div>

  )
}

export default Card