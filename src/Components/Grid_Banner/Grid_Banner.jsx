import "./Grid_Banner.css"
export default function Grid_Banner({ img, head1, head2, price }) {
    return <>
        <div className="grid_banner-cont">
            <div className="grid_banner" style={{ backgroundImage: `url(${img})` }} >
                <p className="head1">{head1}</p>
                <p className="head2">{head2}</p>
                <div className="banner_link flex">
                    <a>Learn more </a>
                    <a>Buy</a>
                </div>

            </div> 
        </div>

    </>
}