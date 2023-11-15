import { useNavigate } from 'react-router-dom';
import './first.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginTab } from '../../store/loginTab.js';

import Logo from '../../components/logo.js';

function First() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let tab = useSelector((state) => state.loginTab)


    function loginClick(action) {
        dispatch(setLoginTab(action))
        navigate('/login')
    }

    return (
        <>
            <div className="container">
                <Logo></Logo>

                <div className='btn-container'>
                    <button className='login-btn' onClick={() => loginClick('customer')}>일반 회원 로그인</button>
                    <button className='login-btn' onClick={() => loginClick('designer')}>디자이너 회원 로그인</button>
                </div>
                <h3 className='register-btn' onClick={() => { navigate('/signup') }}>join us?</h3>
            </div>
        </>
    )
}

export default First;