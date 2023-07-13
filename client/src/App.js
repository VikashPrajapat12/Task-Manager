import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { Addtask } from "./component/AddTask";
import { Home } from "./component/Home";
import { NavBar } from "./component/NavBar";
import { Tasklist } from "./component/Tasklist";
import { UpdateTask } from "./component/UpdateTask";


export function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/add-tasks" element={<Addtask />}></Route>
                <Route path="/task-list" element={<Tasklist />}></Route>
                <Route path="/update-task/:id" element={<UpdateTask />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
