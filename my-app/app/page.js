import Image from "next/image";
import AgroHome from './home/page'
import USSD from "./ussd/page";
import Navbar from "./component/Navbar/Navbar";
import Marketplace from "./marketplace/page";
import Howitworks from './howitworks/page'
import SuccessStories from "./success/page";
import Footer from "./component/Footer/Footer";
import InteractiveStats from "./interactivestats/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AgroHome />
      <USSD/>
      <Marketplace />
      <Howitworks/>
      <SuccessStories/>
      <InteractiveStats/>
      <Footer/>
    </div>
  );
}
