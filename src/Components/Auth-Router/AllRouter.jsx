import { Routes, Route } from "react-router-dom"
import Mac from "../Mac/Mac"
import Home from "../Home/Home"
import Iphone from "../Iphone/Iphone"
import Ipad from "../Ipad/Ipad"
import Watch from "../Watch/Watch"
import Tv from "../Tv/Tv"
import Music from "../Music/Music"
import Shop from "../Shop/Shop"
export default function AllRoutes() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/shop" element={<Shop />} />

          
        </Routes>
    </>
}