import Carousel from 'react-multi-carousel';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Access_cards from '../Access_cards/Access_cards';
import Banner from "../Bannner/Banner"
import Cards from "../Cards/Cards"
import Flash_card from '../Flash_card/Flash_card';
import Card from 'react-bootstrap/Card';
// import ouripad from "./ipad_video.mp4"
import { Fade } from 'react-reveal';
import "./Iphone.css"
import Video_Banner from '../Video_Banner/Video_Banner';
import Button from '../Button/Button';
import Grid_Banner from '../Grid_Banner/Grid_Banner';
import { AuthContext } from '../Auth-Router/AuthContext';

export default function Iphone() {
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
                {/* <Video_Banner video={ouripad} /> */}
            </div>

            <div style={{ border: "1px solid green", padding: "100px", paddingTop: "0px" }} className='ipad-all-models container'>
                <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
                    <h3 style={{ fontSize: "56px", lineHeigth: "60px", fontWeight: "600", boxSizing: 'border-box' }}>Which iPad is right for you.</h3>
                </div>
                <div style={{ margin: "auto" }} className='ipad-all-models-cont flex'>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14_pro__cjmfbiggqhpy_large.jpg" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPhone14 Pro</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> The ultimate iPhone
                            </p>
                            <p style={{ marginTop: "35px" }}>From 129900.00 Rupees</p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_14__ct4sjk962pea_large.jpg" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPhone 14</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> A total powerhouse.

                            </p>
                            <p style={{ marginTop: "45px" }}>From 79900.00 Rupees</p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "10px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPhone 13</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> LAs amazing as ever.

                            </p>
                            <p style={{ marginTop: "30px" }}>From 64900 Rupees</p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                    <div style={{ border: "1px solid blue", width: "15vw", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "10px", borderRadius: "20px" }} className='ipad-prod'>
                        <div style={{ marginBottom: "8px" }} className='ipad-card-img-div'>
                            <img src="https://www.apple.com/v/iphone/home/bk/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg" width="100%" alt="" />
                        </div>
                        <div style={{ textAlign: "center" }} className='ipad-card-cont-div'>
                            <h3 style={{ fontSize: "24px", lineHeight: "28px", fontWeight: "600", marginBottom: "10px" }}>iPhone</h3>
                            <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "600" }}> Serious power value.
                            </p>
                            <p style={{ marginTop: "28px" }}>From 49900 Rupees</p>
                            <Button shape={true} />
                            <a style={{ color: "blue", textDecoration: "underline" }}>Learn more</a>
                        </div>
                    </div>

                </div>

            </div>

            <div className="ipad container">
                <div>
                    <Banner bg={true} color={true} ptag={true} head1="Iphone 14" head2="Trade in your smartphone for credits." price="1000" img="https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png?202301200130" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner color={true} ptag={true} head1="iPhone Series." head2="Why Apple is the best place to buy iPhone" price="1000" img="https://www.apple.com/v/iphone/home/bk/images/overview/retail/why_apple__ezn1ktvka6oi_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner bg={true} color={true} ptag={true} head1="iCloud" head2="The best place for all your photos,files and more." price="1000" img="https://www.apple.com/in/iphone/home/images/overview/retail/trade_in__djk6i9425m4i_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner bg2={true} color={true} ptag={true} head1="Get more out of your iPhone" head2="Bundle four apple services and enjoy more for less." price="1000" img="https://www.apple.com/in/ipad/home/images/overview/bundle__dcx98bi8r7o2_large.jpg" alt="mac" />

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
                        {macSave?.map((item) => <Flash_card head2={item.title} url={item.image} key={item.id} />)}

                    </Carousel>;
                </div>
            </div>



       


            <div className="ipad container">
                <div>
                    <Banner bg2={true} bg={true} color={true} ptag={true} head1="Get more out of your Apple" head2="Magic runs in the family." price="1000" img="https://www.apple.com/v/iphone/home/bk/images/overview/accessories/airpods-pro-fall-22/airpods__eb24cvhoe26a_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner bg2={true} bg={true} color={true} ptag={true} head1="IOS 16" head2="For your Family" price="1000" img="https://www.apple.com/in/iphone/home/images/overview/why-iphone/ios16__b66zg2a3322q_large.jpg" alt="mac" />

                </div>
            </div>

            <div className="ipad container">
                <div>
                    <Banner bg2={true} bg={true} color={true} ptag={true} head1="Switching to Apple" head2="Is very Easy." price="1000" img="https://www.apple.com/in/iphone/home/images/overview/why-iphone/switching_to_iphone__e3oz9r418awm_large.jpg" alt="mac" />

                </div>
            </div>


        </section>


    </>
} 