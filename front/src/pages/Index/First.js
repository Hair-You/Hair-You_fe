import { useNavigate } from 'react-router-dom';
import './first.scss'

function First() {
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className='main-logo-container'>
                <h1 className="main-logo">Hair You</h1>
            </div>

            <div className='btn-container'>
                <button className='btn' onClick={() => { navigate('login') }}>customer signup</button>
                <button className='btn' onClick={() => { navigate('login') }}>designer signup</button>
            </div>
            <div className='signup-container'>
                <h3 onClick={() => { navigate('/signup') }}>join us?</h3>
            </div>
        </div>
    )
}

export default First;