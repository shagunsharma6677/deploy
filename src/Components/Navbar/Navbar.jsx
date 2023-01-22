import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
    return <>
        <div className="max-cont">
            <nav>
                <ul style={{width:"50vw" ,margin:"auto"}} className=" flex nav-ul">
                    <li><Link to="/"><img src="" alt="logo" /></Link></li>
                    <li><Link to="/mac">Mac</Link></li>
                    <li><Link to="/ipad">iPad</Link></li>
                    <li><Link to="/iphone">iPhone</Link></li>
                    
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </div>
    
    </>
}