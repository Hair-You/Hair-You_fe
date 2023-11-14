import './login.scss'
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo'
import { useSelector, useDispatch } from 'react-redux';
import { setLoginTab } from '../../store/loginTab.js';
import { login, logout } from '../../store/user.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const tab = useSelector((state) => state.loginTab) //디자이너, 손님 정보 저장
    const config = { "Content-Type": 'application/json' }; //json 형태로
    const user = useSelector((state) => state.user) //로그인한 유저 정보 저장
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const loginHandler = (e) => {
        e.preventDefault();

        axios.post('/api/auth/user/login', { id, password }, config)
            .then(response => {

                console.log(response.data)

                dispatch(login({
                    id: id,
                    password: password,
                    job: tab.name
                }));

                navigate('/cmain')
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <Logo />
            <div className='main-container'>
                <ListGroup horizontal>
                    <ListGroup.Item className={tab.name === 'customer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('customer')) }} >customer</ListGroup.Item>
                    <ListGroup.Item className={tab.name === 'designer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('designer')) }} >designer</ListGroup.Item>
                </ListGroup>


                <form className='login-form'>
                    <ul>
                        <li>
                            <input type='id' name='id' placeholder='ID' onChange={(e) => setId(e.target.value)}></input>
                        </li>
                        <li>
                            <input type='password' name='password' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}></input>
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