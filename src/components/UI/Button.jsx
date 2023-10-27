
const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className={`p-2 text-lg text-center bg-cyan-900 text-white ${props.className}`}>{props.children}</button>
  )
}

export default Button