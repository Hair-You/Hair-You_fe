import './login.scss'
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo'
import { useSelector, useDispatch } from 'react-redux';
import { setLoginTab } from '../../store/store';

function Login() {

    let tab = useSelector((state) => state.loginTab)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="container">
            <Logo />
            <div className='main-container'>
                <ListGroup horizontal>
                    <ListGroup.Item className={tab.name === 'customer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('customer')) }} >customer</ListGroup.Item>
                    <ListGroup.Item className={tab.name === 'designer' ? 'active' : ''} onClick={() => { dispatch(setLoginTab('designer')) }}>designer</ListGroup.Item>
                </ListGroup>


                <form className='login-form'>
                    <ul>
                        <li>
                            <input type='text' placeholder='ID'></input>
                        </li>
                        <li>
                            <input type='text' placeholder='PASSWORD'></input>
                        </li>
                    </ul>
                    <button type='submit'>Login</button>
                    <p onClick={() => { navigate('/signup') }}>JOIN US?</p>
                </form>
                {console.log(tab.name)}
            </div>
        </div >
    )
}

export default Login;