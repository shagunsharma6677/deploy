import React from "react";
import Banner from "../Bannner/Banner"
import Carousels from "../Carousels/Carousels";
import Footer from "../Footer/Footer";
import Grid_Banner from "../Grid_Banner/Grid_Banner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"
import { AuthContext } from "../Auth-Router/AuthContext";
import { Fade } from "react-reveal";
export default function Home() {

    const { Auth } = React.useContext(AuthContext)
    console.log(Auth)
    return <>
        <section className="home_sec">
            <div className="max-cont home_banner">
                <div className="container">
                    <Banner head1="IPhone 14 Pro" head2="Pro Beyond" price="1000" img="https://www.apple.com/v/home/aw/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_large.jpg" />
                </div>
            </div>

            <div className="max-cont home_banner">
                <div className="container">
                    <Banner head1="HomePod" head2="Profound sound" img="https://www.apple.com/v/home/ax/images/heroes/homepod/hero_homepod_24__gc2r18ylea2q_largetall.jpg" />
                </div>
            </div>

            <div className="max-cont home_banner">
                <div className="container">
                    <Banner head1="Mac mini" head2="Supercharged by M2 and M2 Pro." img="https://www.apple.com/v/home/ax/images/heroes/mac-mini/hero_macmini_preorder__ixuialh97nyq_largetall.jpg" />
                </div>
            </div>
            <div className="home_grid max-cont">
                <div>
                    <Grid_Banner head1="Creativity and community" head2="Explore the new Black Unity watch strap and matching face." img="https://www.apple.com/v/home/ax/images/promos/watch-black-unity/promo_bhm__d8b9z5rlwjgy_large.jpg" />
                </div>
                <div>
                    <Grid_Banner head1="iPad Pro" head2="Supercharged bt M2" img="https://www.apple.com/v/home/ax/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_large.jpg" />
                </div>
                <div>
                    <Grid_Banner head1="IPhone 14 Pro" head2="Pro Beyond" img="https://www.apple.com/v/home/aw/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_large.jpg" />
                </div>
                <div>
                    <Grid_Banner head1="IPhone 14 Pro" head2="Pro Beyond" img="https://www.apple.com/v/home/aw/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_large.jpg" />
                </div>
            </div>

            <div className="carousel">
                <Carousels />
            </div>
            <div>
                <Footer />
            </div>

        </section>

    </>
}

