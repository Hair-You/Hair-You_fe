import './login.scss'
import { ListGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo'

function Login() {

    const navigate = useNavigate()

    return (
        <div className="container">
            <Logo />
            <div className='main-container'>
                <ListGroup horizontal>
                    <ListGroup.Item >customer</ListGroup.Item>
                    <ListGroup.Item >designer</ListGroup.Item>
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

            </div>
        </div>
    )
}

export default Login;