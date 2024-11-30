import './input.css'

type InputProps = {
    label?: string; 
    placeholder?: string; 
    type?: string; 
}

const Input = (props: InputProps) => {
    return (
        <div className="textInputWrapper">
            <label className="textInputLabel">{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} className="textInput" />
        </div>
    )
};

export default Input;