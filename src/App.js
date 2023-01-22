import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AllRoutes from "./Components/Auth-Router/AllRouter";
import Cards from "./Components/Cards/Cards";
import Access_cards from "./Components/Access_cards/Access_cards";
import Flash_card from "./Components/Flash_card/Flash_card";
import Shop from "./Components/Shop/Shop";
import Grid_Banner from "./Components/Grid_Banner/Grid_Banner";
import Ipad from "./Components/Ipad/Ipad"
import Anim_Page from "./Components/Mac/Anim_Page";
import CarouselCards from "./Components/Responsive_cards/Responsive_Cards";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <AllRoutes/>
      {/* <Cards/> */}
      {/* <Access_cards /> */}
      {/* <Flash_card/> */}
      {/* <Shop/> */}
      {/* <Banner/> */}
      {/* <video autoPlay muted loop>
        <source src={our} type="video/mp4" />
      </video> */}
      {/* <Grid_Banner/> */}
      {/* <Ipad/> */}
      {/* <Iphone/> */}
      {/* <Watch/> */}
      {/* <Tv/> */}
      {/* <Music/> */}
      {/* <Anim_Page/> */}
      {/* <CarouselCards/> */}
  
      
    </> 
  );
}

export default App;
