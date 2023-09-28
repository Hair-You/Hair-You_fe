import { useNavigate } from 'react-router-dom';
import './first.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginTab } from '../../store/loginTab.js';

function First() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let tab = useSelector((state) => state.loginTab)

    function loginClick(action) {
        dispatch(setLoginTab(action))
        navigate('/login')
    }

    return (
        <div className="container">
            <div className='main-logo-container'>
                <h1 className="main-logo">Hair You</h1>
            </div>

            <div className='btn-container'>
                <button className='btn' onClick={() => loginClick('customer')}>customer login</button>
                <button className='btn' onClick={() => loginClick('designer')}>designer login</button>
            </div>
            <h3 onClick={() => { navigate('/signup') }}>join us?</h3>
        </div>
    )
}

export default First;