import { useState } from 'react';
import { login } from '../services/users.services';

function LoginPage({ onLogin }) {
    const [errors, setErrors] = useState([]);

    const [email, setEmil] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        login(email, password)
            .then(({ token, user }) => {
                onLogin(token, user);
            })
            .catch(err => {
                console.log(err);
                setErrors(err.errors);

            })

    }

    function onChangeEmail(e) {
        setEmil(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
                <label>E-Mail: </label>
                <input type="text" onChange={onChangeEmail} value={email} />
                <br />
                <label>Password: </label>
                <input type="password" onChange={onChangePassword} value={password} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default LoginPage
