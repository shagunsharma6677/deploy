import "./Cards.css"
import Button from "../Button/Button"
// import Pulse from "react-reveal"
export default function Cards(props) {
    const { image, price, title, id } = props
    // console.log("props" ,props)
    return <>
        <div key={id} className="Cards-cont flex">
            <div className="cards-content">
                <h3>{title}</h3>
                <div className="cards-img-div">
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>From $`${price}/month` </p>
                    <Button cardD={props} />
                </div>
            </div>
        </div>
    </>
}