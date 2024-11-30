import './button.css'

const Button = (props) => {
    return (
        <button className="button" onClick={props.onClick}>
            <p className="text">{props.label}</p>
        </button>
    )
};

export default Button;