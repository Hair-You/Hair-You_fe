import './login.scss'
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo'
import { useSelector, useDispatch } from 'react-redux';
import { setLoginTab } from '../../store/loginTab.js';
import { login, logout } from '../../store/user.js';
import { useState } from 'react';

function Login() {

    const [id, setId] = useState('')
    const [passwd, setPasswd] = useState('')
    const tab = useSelector((state) => state.loginTab)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginHandler = (e) => {
        e.preventDefault();

        dispatch(login({
            userId: id,
            userPasswd: passwd,
            userJob: tab.name
        }));
    }

    return (
        <div className="container">
            <Logo />
            <div className='main-container'>
                <ListGroup horizontal>
                    <ListGroup.Item className={tab.name === 'customer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('customer')) }}>customer</ListGroup.Item>
                    <ListGroup.Item className={tab.name === 'designer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('designer')) }}>designer</ListGroup.Item>
                </ListGroup>


                <form className='login-form'>
                    <ul>
                        <li>
                            <input type='id' placeholder='ID' onChange={(e) => { setId(e.target.value) }}></input>
                        </li>
                        <li>
                            <input type='password' placeholder='PASSWORD' onChange={(e) => { setPasswd(e.target.value) }}></input>
                        </li>
                    </ul>
                    <button type='submit' onClick={loginHandler}>Login</button>
                    <p onClick={() => { navigate('/signup') }}>JOIN US?</p>
                </form>
                {console.log(user)}
            </div>
        </div >
    )
}

export default Login;