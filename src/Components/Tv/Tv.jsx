import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Access_cards from '../Access_cards/Access_cards';
import Banner from "../Bannner/Banner"
import Cards from "../Cards/Cards"
import Flash_card from '../Flash_card/Flash_card';
import Card from 'react-bootstrap/Card';
import our from "./video.mp4"
import "./Tv.css"
import Video_Banner from '../Video_Banner/Video_Banner';

export default function Tv() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return <>
        <section className="mac-sec">
            <div className=''>
                <Video_Banner video={our} />
            </div>
            <div className="mac max-cont">
                <div>
                    <Banner head1="MacBook Pro" head2="Mover. Maker. Boundary breaker." price="1000" img="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg" alt="mac" />

                </div>
            </div>
            <div className="mac max-cont">
                <div>
                    <Banner head1="MacBook Pro" head2="Mover. Maker. Boundary breaker." price="1000" img="https://www.apple.com/v/mac/home/br/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="mac-banner-2">
                <div className='mac-banner-cont container flex'>

                    <h3>A gift for every wish</h3>
                    <div>
                        <p>Find something for everyone
                            this Lunar New Year.</p>
                    </div>
                    <p>Shop the gift here </p>
                </div>

            </div>
            <div className="mac-all-models">
                <h2>All Models. <span> Take your pick.</span> </h2>
                <div className="cards-carol ">
                    <Carousel responsive={responsive}>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </Carousel>;
                </div>
            </div>

            {/* <div className="mac-flash-models container">
                <h2>Ways to save. <span>Find what works for you.</span> </h2>
                <div className='mac-flash-2 flex'>
                    <Card className='Flash-card-2 '>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img className='flash-2-img' variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301" />
                    </Card>
                    <Card className='Flash-card-2'>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301" />
                    </Card>
                </div>
            </div> */}

            <div className="mac-access-models">
                <h2>Accessories. <span> Made for Mac.</span> </h2>
                <div className="access-cards-carol ">
                    <Carousel responsive={responsive}>
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                        <Access_cards />
                    </Carousel>;
                </div>
            </div>




            <div className="mac-flash-models">
                <h2>Ways to save. <span>Find what works for you.</span> </h2>
                <div className="flash-cards-carol ">
                    <Carousel responsive={responsive}>
                        <Flash_card />
                        <Flash_card />
                        <Flash_card />
                        <Flash_card />
                        <Flash_card />
                        <Flash_card />
                        <Flash_card />
                    </Carousel>;
                </div>
            </div>

            <div className="mac-flash-models container">
                <h2>Ways to save. <span>Find what works for you.</span> </h2>
                <div className='mac-flash-2 flex'>
                    <Card className='Flash-card-2 '>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img className='flash-2-img' variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301" />
                    </Card>
                    <Card className='Flash-card-2'>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1645138486301" />
                    </Card>
                </div>
            </div>

            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg")` }} className='bg_banner_cont container'>
                    <p className="head1">Apple At Work</p>
                    <p className="head2">Get the power to take your business to the next level</p>
                    <p className="head2">Learn about Apple at Work</p>
                    <p className="head2">Learn more about Mac for business.</p>
                </div>
            </div>

            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/105/media/us/macbook-air-m1/2022/648bb92f-0bb4-452c-bfbc-2898641b22f5/anim/hero/large.mp4")` }}  className='bg_banner_cont container'>
                    <p className="head1">Apple and Education</p>
                    <p className="head2">Empowering education and students to move the world forward</p>
                    <p className="head2">Learn about Apple and education</p>
                </div>
            </div>


        </section>


    </>
} 