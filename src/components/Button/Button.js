import './Button.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.customClass}`}>{props.label}</button>
  )
};

export default Button;
