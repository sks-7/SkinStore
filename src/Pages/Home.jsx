import AdBar from "../Components/AdBar";
import Slider from "../Components/Carousel/Slider";
import Footer from "../Components/Footer";
import OverOnBlogSec from "../Components/HomeElements/OverOnBlogSec";
import ShopByCategorySec from "../Components/HomeElements/ShopByCategorySec";
import TrendingSection from "../Components/HomeElements/TrendingSection";
import WhatpeopleArebuyingSec from "../Components/HomeElements/WhatpeopleArebuyingSec";
import Navbar from "../Components/NavBar";
import OneNavbar from "../Components/OneNavbar";
import styles from "../Pages_Css/HomePage.module.css"

const Home = () => {
  return (
    <>
      <div>
        <AdBar />
        <OneNavbar />
        {/* <Navbar /> */}
      </div>
      <Slider/>
      <TrendingSection/>
      <div className={styles.Home_midBanner}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/15/Skinstore_August_Referral_-_Untitled_Page_%284%29-022315.png" alt=""  />
      </div>
      <ShopByCategorySec/>
      <WhatpeopleArebuyingSec/>
      <div className={styles.Home_lastLogoBanner}>
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png" alt=""  />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png" alt=""  />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png" alt=""  />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png" alt=""  />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png" alt=""  />
        <img src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png" alt=""  />
      </div>
      <OverOnBlogSec/>
      <div className={styles.Home_LastBanner}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg" alt=""  />
      </div>
      <hr />
      <Footer />
    </>
  );
};
export default Home;
