import { Routes, Route } from "react-router-dom"
import Dashboard from "../dashboard/Dashboard"
import ViewToDo from "../todo/ViewToDo"
import Menu from "./Menu"
import './Layout.css'

function Router() {

    return (
        <>
        <Menu />
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/toDo" element={<ViewToDo />}/>
        </Routes>
        </>
    )
}

export default Router