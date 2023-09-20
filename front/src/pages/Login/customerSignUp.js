import './signUp.scss'
import Logo from '../../components/logo'
import { useState } from 'react';

function CustomerSignUp() {

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [tel, setTel] = useState('')

    console.log(id)

    return (
        <div className="container">
            <Logo></Logo>
            <div className='main-container'>
                <h1>customer signup</h1>
                <hr></hr>
                <div className='sign'>
                    <form className='signForm'>
                        <ul>
                            <li>
                                <input type='text' placeholder='ID' ></input>
                            </li>
                            <li>
                                <input type='password' placeholder='PASSWORD'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='NAME'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='SEX'></input>
                            </li>
                            <li>
                                <input type='tel' placeholder='TEL'></input>
                            </li>
                        </ul>
                        <button type='submit'>signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;