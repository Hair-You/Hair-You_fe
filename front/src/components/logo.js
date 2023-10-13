import '../App.scss'
import { useNavigate } from 'react-router-dom';

function Logo() {

    const navigate = useNavigate()

    return (
        <div className='logo-container' style={{ cursor: 'pointer' }} >
            <h1 className='logo' onClick={() => { navigate('/') }}>Hair You</h1>
        </div >
    )
}

export default Logo;