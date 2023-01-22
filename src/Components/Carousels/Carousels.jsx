import { Carousel } from "react-responsive-carousel";
import "./Carousels.css"
export default function Carousels() {
    return <>
        <Carousel autoPlay stopOnHover={false} showThumbs={false} infiniteLoop={true}>
            <div>
                <img alt="" src="https://is5-ssl.mzstatic.com/image/thumb/l1GWYR-J4UvmK7849F472A/1250x703.jpg" width="100px" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1250x703.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/1250x703.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/1250x703.jpg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img alt="" src="https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/1250x703.jpg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img alt="" src="https://is3-ssl.mzstatic.com/image/thumb/Auxgchkiva7ORjAQy9DP6w/1250x703.jpg" />
                <p className="legend">Legend 6</p>
            </div>
            <div>
                <img alt="" src="https://is3-ssl.mzstatic.com/image/thumb/CXnyehPcDHEauavhg0D79Q/1250x703.jpg" />
                <p className="legend">Legend 7</p>
            </div>
            <div>
                <img alt="" src="https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/1250x703.jpg" />
                <p className="legend">Legend 8</p>
            </div>
            <div>
                <img alt="" src="https://is3-ssl.mzstatic.com/image/thumb/CUcDZ-At1_oNSxrwvuRguA/1250x703.jpg" />
                <p className="legend">Legend 9</p>
            </div>
            <div>
                <img alt="" src="https://is5-ssl.mzstatic.com/image/thumb/RcgPZ5VHFSmr43fk1fjuMw/1250x703.jpg" />
                <p className="legend">Legend 10</p>
            </div>
        </Carousel></>
}