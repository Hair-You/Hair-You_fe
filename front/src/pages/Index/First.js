import './first.scss'

function First() {
    return (
        <div className="container">
            <div className='logo-container'>
                <h1 className="main-logo">Hair You</h1>
            </div>
            <div className='btn-container'>
                <button className='btn'>customer login</button>
                <button className='btn'>designer login</button>
            </div>
            <div className='signup-container'>
                <h3>join us?</h3>
            </div>
        </div>
    )
}

export default First;