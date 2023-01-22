import Carousel from 'react-multi-carousel';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Access_cards from '../Access_cards/Access_cards';
import Banner from "../Bannner/Banner"
import Cards from "../Cards/Cards"
import Flash_card from '../Flash_card/Flash_card';
import Card from 'react-bootstrap/Card';
import ouripad from "./ipad_video.mp4"
import { Fade } from 'react-reveal';
import "./Ipad.css"
import Video_Banner from '../Video_Banner/Video_Banner';
import Button from '../Button/Button';
import Grid_Banner from '../Grid_Banner/Grid_Banner';
import { AuthContext } from '../Auth-Router/AuthContext';

export default function Ipad() {
    const { macSave } = React.useContext(AuthContext)
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
        <section className="ipad-sec">
            <div className=''>
                <Video_Banner video={ouripad} />
            </div>

            <div style={{ border: "1px solid green", padding: "100px", paddingTop: "0px" }} className='ipad-all-models container'>
                <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
                    <h3 style={{ fontSize: "56px", lineHeigth: "60px", fontWeight: "600" }}>Which iPad is right for you.</h3>
                </div>
                <div style={{ margin: "auto" }} className='ipad-all-models-cont flex'>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPad Pro</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam officia repudiandae dicta cum ad asperiores! Repellendus eius reprehenderit facere!
                            </p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPad Pro</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam officia repudiandae dicta cum ad asperiores! Repellendus eius reprehenderit facere!
                            </p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPad Pro</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam officia repudiandae dicta cum ad asperiores! Repellendus eius reprehenderit facere!
                            </p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/ipad/home/cc/images/overview/compare_ipad_pro__erf9x8mw04sy_large.png" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPad Pro</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam officia repudiandae dicta cum ad asperiores! Repellendus eius reprehenderit facere!
                            </p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="ipad container">
                <div>
                    <Banner color={true} ptag={true} head1="Accessories" head2="Explore cases,covers,keyboards, Apple Pencil, AirPods and more." price="1000" img="https://www.apple.com/v/ipad/home/cc/images/overview/accessories__gdpezee1naai_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner color={true} ptag={true} head1="iPadOS 16" head2="Incredible capable. Unmistakably iPad." price="1000" img="https://www.apple.com/in/ipad/home/images/overview/ipados16__9t47xpd66wiq_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner color={true} ptag={true} head1="iCloud" head2="The best place for all your photos,files and more." price="1000" img="https://www.apple.com/in/ipad/images/overview/icloud__cdale8bavfv6_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner color={true} ptag={true} head1="Get more out of your iPad" head2="Bundle four apple services and enjoy more for less." price="1000" img="https://www.apple.com/in/ipad/home/images/overview/bundle__dcx98bi8r7o2_large.jpg" alt="mac" />

                </div>
            </div>


            <div className="ipad-flash-models container">
                <h2>Ways to save. <span>Find what works for you.</span> </h2>
                <div className='ipad-flash-2 flex'>
                    <div style={{ backgroundImage: `url("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-50-monthly-installments-202210?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1664396475865")` }} className='ipad-flash-model-card'>
                        <p>Flexible ways to pay, Plus instant saving and No Cost EMI </p>
                    </div>
                    <div style={{ backgroundImage: `url("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-50-specialist-help-202211?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1671235795870")`, backgroundRepeat: "no-repeat" }} className='ipad-flash-model-card-2'>
                        <p>Save ona new Mac with special education pricing.</p>
                    </div>

                </div>
            </div>




            <div className="ipad-flash-models">
                <h2>Setup and support <span>Our Specialists are here to help</span> </h2>
                <div className="flash-cards-carol ">
                    <Carousel responsive={responsive}>
                        {macSave?.map((item) => <Flash_card head2={item.title}  url={item.image} key={item.id} />)}
    
                    </Carousel>;
                </div>
            </div>



            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/v/ipad/home/cc/images/overview/ipad_for_education__rvh8drp6mfma_large.jpg")`, backgroundColor: "black" }} className='bg_banner_cont container'>
                    <Fade top>
                        <p className="head1">Apple At Work</p>
                        <p className="head2">Get the power to take your business to the next level</p>
                        <p className="head2">Learn about Apple at Work</p>
                        <p className="head2">Learn more about Mac for business.</p>
                    </Fade>
                </div>
            </div>

            <div className='bg_banner'>
                <div style={{ backgroundImage: `url("https://www.apple.com/v/ipad/home/cc/images/overview/ipad_for_business__dg81h7gvgbyq_large.jpg")`, backgroundColor: "black" }} className='bg_banner_cont container'>
                    <Fade top>
                        <p style={{ color: "black" }} className="head1">Apple and Education</p>
                        <p style={{ color: "black" }} className="head2">Empowering education and students</p>
                        <p style={{ color: "black" }} className="head2">Learn about Apple and education</p>
                    </Fade>
                </div>
            </div>


        </section>


    </>
} 