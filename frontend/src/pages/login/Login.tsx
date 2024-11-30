import './login.css'
import Input from '../../Components/Input/Input'

const Login = () => {
    return (
        <div className="login">
            <Input label='Correo electronico' placeholder='example@example.com' type="text" />
            <Input label='Contraseña' placeholder='*********' type="password" />
        </div>
    )
};

export default Login;