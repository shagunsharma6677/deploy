import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "react-slick"
import PrevArrow from "react-slick"


import React from 'react';
import Access_cards from '../Access_cards/Access_cards';
import Banner from "../Bannner/Banner"
import Cards from "../Cards/Cards"
import Flash_card from '../Flash_card/Flash_card';
import Card from 'react-bootstrap/Card';
import our from "./macBookPro.mp4"
import our2 from "./mac-video-2.mp4"
import { Fade } from 'react-reveal';
import "./Mac.css"
import Video_Banner from '../Video_Banner/Video_Banner';
import { AuthContext } from '../Auth-Router/AuthContext';

export default function Mac() {
    const { macAllModel, macAccess, macSave,handleBuy } = React.useContext(AuthContext)
    // console.log("mac", data)
    console.log(macAllModel, "allmac")

    const set = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: 'react__slick__slider__parent',
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
                    <Banner head1="Mac mini" head2="More muscle. More hustle." price="1000" img="https://www.apple.com/v/mac/home/bs/images/overview/hero/mac_mini__d3310qb7lt6q_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="mac-banner-2">
                <div className='mac-banner-cont container flex'>
                    <Fade top>
                        <h3>A gift for every wish</h3>
                        <div>
                            <p>Find something for everyone
                                this Lunar New Year.</p>
                        </div>
                        <p>Shop the gift here </p>
                    </Fade>


                </div>

            </div>
            <div className="mac-all-models">
                <h2>All Models. <span> Take your pick.</span> </h2>
                <div className="cards-carol ">
                    <div className='carouselCards'>
                        <div className='carousel__slider'>
                            <Slider {...set}>
                                {macAllModel?.map((item) => <Cards handleBuy={handleBuy} image={item.image} title={item.title} price={item.price} id={item.id} />)}
                            </Slider>
                        </div>
                    </div>


                </div>
            </div>

            <div className="mac-flash-models container">
                <h2>Shopping guides. <span>Can’t decide? Start here.</span> </h2>
                <div className='mac-flash-2 flex'>
                    <div className='mac-flash-model-card'>
                        <p>Lorem ipsum dolor sit amet consectetur, </p>
                    </div>
                    <div className='mac-flash-model-card-2'>
                        <p>Shop one on one with a Mac Specialist</p>
                    </div>

                </div>
            </div>

            <div className="mac-access-models">
                <h2>Accessories. <span> Made for Mac.</span> </h2>
                <div className="cards-carol ">
                    <div className='carouselCards'>
                        <div className='carousel__slider'>
                            <Slider {...set}>
                                {macAccess?.map((item) => <Cards image={item.image} title={item.title} price={item.price} id={item.id} />)}
                            </Slider>
                        </div>
                    </div>


                </div>

            </div>

            <div className="mac-access-models container">
                <h2>The Apple Store difference. <span> Even more reasons to shop with us.</span> </h2>
                <div className='mac-video-2content'>
                    <h3>Customise your Mac.</h3>
                    <div>
                        <p>Build it just way you want. Choose your memory, storage,graphics,even colous.</p>
                    </div>
                    <div className="access-cards-carol">
                        <Video_Banner video={our2} />
                    </div>

                </div>

            </div>





            <div className="mac-flash-models container">
                <h2>Ways to save. <span>Find what works for you.</span> </h2>
                <div className='mac-flash-2 flex'>
                    <div style={{ backgroundImage: `url("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1664396475865")` }} className='mac-flash-model-card'>
                        <p>Flexible ways to pay, Plus instant saving and No Cost EMI </p>
                    </div>
                    <div style={{ backgroundImage: `url("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-education-202110?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1665016906770")`, backgroundRepeat: "no-repeat" }} className='mac-flash-model-card-2'>
                        <p>Save ona new Mac with special education pricing.</p>
                    </div>

                </div>
            </div>




            <div className="mac-flash-models">
                <h2>Setup and support <span>Our Specialists are here to help</span> </h2>
                <div className="flash-cards-carol ">

                    <div className="cards-carol ">
                        <div className='carouselCards'>
                            <div className='carousel__slider'>
                                <Slider {...set}>
                                    <Flash_card head1="EASY DATA TRANSFER" head2="New Mac? See how easy it is to move your content over." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-transfer-202206?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1664999066585" />
                                    <Flash_card head1="APPLECARE" head2="Get accidental damage protection ans support from Apple" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630175411000" />
                                    <Flash_card head1="ONLINE PERSONAL SESSION" head2="Get to know your new Mac From basics to top tips." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-apps-202211?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1668101973558" />

                                    <Flash_card head1="WHY MAC" head2="Incredible power. Incredible simple" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-why-mac-202206?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1665009188932" />
                                    <Flash_card head1="MACOS" head2="Works smarter. Plays harder. Goes further. Discover macOS Venture." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630175411000" />
                                    <Flash_card head1="ICLOUD+" head2="Get more storage and great new ways to protect your privacy." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-icloud-202111?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1665105232677" />

                                </Slider>
                            </div>
                        </div>


                    </div>
                    {/* <Carousel responsive={responsive}>
                        <Flash_card head1="EASY DATA TRANSFER" head2="New Mac? See how easy it is to move your content over." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-transfer-202206?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1664999066585" />
                        <Flash_card head1="APPLECARE" head2="Get accidental damage protection ans support from Apple" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630175411000" />
                        <Flash_card head1="ONLINE PERSONAL SESSION" head2="Get to know your new Mac From basics to top tips." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-apps-202211?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1668101973558" />

                        <Flash_card head1="WHY MAC" head2="Incredible power. Incredible simple" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-why-mac-202206?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1665009188932" />
                        <Flash_card head1="MACOS" head2="Works smarter. Plays harder. Goes further. Discover macOS Venture." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-applecare-plus-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1630175411000" />
                        <Flash_card head1="ICLOUD+" head2="Get more storage and great new ways to protect your privacy." url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-icloud-202111?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1665105232677" />


                    </Carousel>; */}
                </div>
            </div>



            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/get-more/business__dhhbnntkcwuq_large.jpg")` }} className='bg_banner_cont container'>
                    <Fade top>
                        <p className="head1">Apple At Work</p>
                        <p className="head2">Get the power to take your business to the next level</p>
                        <p className="head2">Learn about Apple at Work</p>
                        <p className="head2">Learn more about Mac for business.</p>
                    </Fade>
                </div>
            </div>

            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/v/mac/home/bs/images/overview/get-more/education__bq047y5fu7n6_large.jpg")` }} className='bg_banner_cont container'>
                    <Fade top>
                        <p className="head1">Apple and Education</p>
                        <p className="head2">Empowering education and students to move the world forward</p>
                        <p className="head2">Learn about Apple and education</p>
                    </Fade>
                </div>
            </div>


        </section>


    </>
} 