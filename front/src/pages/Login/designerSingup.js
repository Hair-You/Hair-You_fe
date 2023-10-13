import { useState } from "react";
import Logo from "../../components/logo";
import './signUp.scss'

function DesignerSignUp() {

    let [id, setId] = useState('')
    let [passwd, setPasswd] = useState('')
    let [name, setName] = useState('')
    let [nickname, setNickname] = useState('')
    let [sex, setSex] = useState('')
    let [career, setCareer] = useState('')
    let [rank, setRank] = useState('')
    let [profile, setProfile] = useState('')

    return (
        <div className="container">
            <Logo></Logo>
            <div className='main-container'>
                <h1>designer signup</h1>
                <hr></hr>
                <div className='sign'>
                    <form className='signForm'>
                        <ul>
                            <li>
                                <input type='id' placeholder='ID'></input>
                            </li>
                            <li>
                                <input type='password' placeholder='PASSWORD'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='NAME'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='NICKNAME'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='SEX'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='CAREER'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='RANK'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='PROFILE'></input>
                            </li>
                        </ul>
                        <button type='submit'>signup</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default DesignerSignUp;