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
    const [password, setPassword] = useState('')
    const tab = useSelector((state) => state.loginTab) //디자이너, 손님 정보 저장
    const user = useSelector((state) => state.user) //로그인한 유저 정보 저장
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const loginHandler = (e) => {
        e.preventDefault();

        //axios.post

        dispatch(login({
            userId: id,
            userPasswd: password,
            userJob: tab.name
        }));
    }
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        job: tab.name
    })

    //formData 값 넣기
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, job: tab.name });
    };

    return (
        <div className="container">
            <Logo />
            <div className='main-container'>
                <ListGroup horizontal>
                    <ListGroup.Item className={tab.name === 'customer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('customer')) }} onChange={handleChange}>customer</ListGroup.Item>
                    <ListGroup.Item className={tab.name === 'designer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('designer')) }} onChange={handleChange}>designer</ListGroup.Item>
                </ListGroup>


                <form className='login-form'>
                    <ul>
                        <li>
                            <input type='id' name='id' placeholder='ID' onChange={handleChange}></input>
                        </li>
                        <li>
                            <input type='password' name='password' placeholder='PASSWORD' onChange={handleChange}></input>
                        </li>
                    </ul>
                    <button type='submit' onClick={loginHandler}>Login</button>
                    <p onClick={() => { navigate('/signup') }}>JOIN US?</p>
                </form>

                {/*<NaverLogin></NaverLogin>*/}

                {console.log(formData)}
            </div>
        </div >
    )
}

export default Login;