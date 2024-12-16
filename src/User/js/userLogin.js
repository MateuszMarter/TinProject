import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/login.css'


const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(true);
    const [isEmailValid, setEmailValid] = useState(true);

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

        if(password.length < 8) {
            setPasswordValid(false);
            e.preventDefault();
        } else {
            setPasswordValid(true);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        if(email.length < 8) {
            setEmailValid(false);
            e.preventDefault();
        } else {
            setEmailValid(true);
        }
    }

    return (<div className='form-div'>
        <form onSubmit={(e) => {
            let valid = true;
            if(password.length < 8){
                setPasswordValid(false);
                setPassword('');
                valid = false;
                e.preventDefault();
            }
            if(email.length <= 8){
                setEmailValid(false);
                valid = false;
                e.preventDefault();
            }
            if(valid){
                navigate('/');
            }
        }}>
        <h2>Login</h2>
            <div className='email-input'>
                <label htmlFor='email'>E-mail</label>
                <input className='email-input'
                       type='email'
                       id='email'
                       value={email} onChange={(e) => handleEmailChange(e)}/>
                {isEmailValid === false && (
                    <p className='invalid-email' style={{color: "red"}}>Email is not valid</p>
                )}
            </div>
            <div className='password-input'>
                <label htmlFor='password'>Password</label>
                <input className='password-input'
                       type='password'
                       id='password'
                       value={password} onChange={(e) => handlePasswordChange(e)}/>
                {isPasswordValid === false && (
                    <p className='invalid-password' style={{color: "red"}}>Passwords need to be at least 8 characters long</p>
                )}

            </div>
            <div className='submit-button'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>)
}

export default Login;