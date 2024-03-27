import { useNavigate } from "react-router-dom"

function Menu() {

    const navigate = useNavigate()

    function goHome() {
        navigate('/')
    }

    function goToAddToDo(){
        navigate('/add')
    }

    return (
        <div className="nav">
            <button className="btn btn-primary" onClick={goHome}>🏠</button>
            <button className="btn btn-primary" onClick={goToAddToDo}>{`➕`}</button>
            {/* <button className="btn btn-primary"></button>
            <button className="btn btn-primary"></button> */}
        </div>
    )
}

export default Menu