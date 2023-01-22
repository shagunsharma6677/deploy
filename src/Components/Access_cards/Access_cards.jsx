import './Access_cards.css'
import Button from '../Button/Button'
export default function Access_cards({ image, title, id, price }) {
    return <>
        <div key={id} className="Acc-Cards-cont flex">
            <div className="Acc-cards-content">
                <div className="Acc-cards-img-div">
                    <img src={image} alt="" />
                </div>
                <div>
                    <p>{title}</p>
                    <p>From $`${price}/month` </p>
                    <Button />
                </div>
            </div>
        </div>


    </>
}