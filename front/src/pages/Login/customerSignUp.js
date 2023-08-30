import './signup.scss'
import Logo from '../../components/logo'

function CustomerSignUp() {
    return (
        <div className="container">
            <Logo></Logo>
            <div className='main-container'>
                <h1>customer singup</h1>
                <hr></hr>
                <div className='sign'>
                    <form className='signForm'>
                        <ul>
                            <li>
                                <input type='text' placeholder='ID'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='PASSWORD'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='NAME'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='SEX'></input>
                            </li>
                            <li>
                                <input type='text' placeholder='TEL'></input>
                            </li>
                        </ul>
                        <button type='submit'>singup</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;