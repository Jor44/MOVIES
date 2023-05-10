import { useState } from 'react'
import mylogo from '../../assets/images/logo.webp'
import { useNavigate } from 'react-router';
import { PropTypes } from 'prop-types';

export const Login = () => {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate()

    const changeEmail = (e) => {
        setEmail(e.target.value)
    };

    const changePass = (e) => {
        setPass(e.target.value)
    };

    Login.propTypes = {
        email: PropTypes.string,
        pass: PropTypes.string,
        setEmail: PropTypes.func,
        setPass: PropTypes.func

    }

    const clickLogin = (e) => {
        e.preventDefault();

        if (email === 'email@com' && pass === 'admin') {
            navigate('/movies')
        }
        else {
            alert('wrong email or password')
        }

    };

    return (
        <form onSubmit={clickLogin}>
            <img className='logo-img' src={mylogo} alt='log' />
            <input required onChange={changeEmail} className="login-input" type="email" placeholder="email@com" />
            <input required onChange={changePass} className="login-input" type="password" placeholder="admin" />
            <input className="login-btn" type="submit" value='LOGIN' />
        </form>
    )

}

