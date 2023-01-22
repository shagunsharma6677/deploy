import "./Flash_card.css"

export default function Flash_card({url,head1,head2}) {
    return <>
        <div className="Flash-card-cont flex">
            <div className="Flash-card-content">
                <div>
                    <p>{head1}</p>
                    <h2>{head2}</h2>
                </div>
                <div className="Flash-card-img-div">
                    <img src={url} alt="" />
                </div>
            </div>
        </div></>
}