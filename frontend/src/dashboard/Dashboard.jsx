import { useNavigate } from "react-router-dom"
import "./Dashboard.css"

function Dashboard() {

const navigate = useNavigate()

function handleClick() {
  navigate('/toDo')
}

    return (
      <div className="container extraMargin">
        <div >
        <div className="">
          <h1 className="title">TO DO LIST</h1>
        </div>
        <div className="box extraMargin">
          <button onClick={handleClick} className="btn btn-info main">
            <h3>View List</h3>
          </button>
          <button className='btn btn-info main'>
            <h3>Add To Do</h3>
          </button>
        </div>
        </div>
      </div>
    )
}

export default Dashboard