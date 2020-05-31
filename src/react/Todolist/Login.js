import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from './Logo';
import SubmitButton from './SubmitButton';
import { UserContext } from './UserContext';

const Login = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userNameInput = React.createRef();
    const passwordInput = React.createRef();
    const {setUser} = useContext(UserContext)
    const inputFocus = (ref) => {
        ref.current.focus()
    }
    const handleClick = () => {
        fetch('/.netlify/functions/userRead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password, action: "login"})
        })
        .then(response=>response.json())
        .then(res => {
                console.log(res)
                setUser(username)
                props.history.push("/todolist")
            }).catch(err => console.log(err))
    }
    const set_Username = (e) => {
        setUsername(e.target.value )
    }

    const set_Password = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="todolist container-fluid d-flex justify-content-center align-items-center">
            <div className='todolist_login'>
                <Logo />
                <div className="todolist_form">
                    <div className={'todolist_input'}>
                        <input
                            type='text'
                            onChange={set_Username}
                            placeholder='name'
                            name='username'
                            ref={userNameInput} />
                        <label className="todolist_label" onClick={() => inputFocus(userNameInput)}>name</label>
                    </div>

                    <div className={'todolist_input'}>
                        <input
                            type='password'
                            onChange={set_Password}
                            placeholder='password'
                            ref={passwordInput} />
                        <label className="todolist_label" onClick={() => inputFocus(passwordInput)}>password</label>
                    </div>
                    <SubmitButton text="LOGIN" click={handleClick} />
                    <div className='todolist_link'><Link to='/todolist/registration'>No Account? Register Now!</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login;