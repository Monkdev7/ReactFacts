import { createRoot } from "react-dom/client"
import Main from "./components/Main" 
import Navbar from "./components/Navbar"
import "./index.css"

export default function App() {
    return(
        <>
            <Navbar />
            <Main />
        </>
    )
}
