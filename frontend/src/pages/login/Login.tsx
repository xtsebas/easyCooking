import { Link } from 'react-router-dom';

import './login.css'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'

const Login = () => {
    return (
        <form className="form">
            <p className="form-title">Ingresa a tu perfil</p>
            <div className="input-container">
                <Input label='Correo electronico' placeholder='ejemplo@ejemplo.com' type="text" />
            </div>
            <div className="input-container">
                <Input label='Contraseña' placeholder='*********' type="password" />
            </div>
            <Button label='Ingresar' />

            <p className="signup-link">
                No tienes cuenta?
                <Link to="/register">Registrarse</Link>
            </p>
        </form>
    )
};

export default Login;