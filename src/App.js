import { Route, Routes } from 'react-router-dom'
import './App.css'
import Expart from './components/Expart/Expart'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </div>
            <Expart></Expart>
            <Footer></Footer>
        </div>
    )
}

export default App
