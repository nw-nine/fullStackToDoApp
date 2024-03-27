import { useEffect, useState } from "react"

function ViewToDo() {
    
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5001/toDo')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setToDos(data.data)
        })
        console.log(toDos)
    }, []); 

    return (
        <div className="">
            <h1 className="text-warning center">YOUR TODO LIST</h1>
        
            <div className="container ">
                <ul className="toDos ">
                    {toDos.map(todo => {
                        return (
                        <div key={todo.toDo_id} className="toDoItem">
                            <h2 className="toDoName">{todo.toDo_name}</h2>
                            <li className="toDo">{todo.toDo_description}</li>
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ViewToDo