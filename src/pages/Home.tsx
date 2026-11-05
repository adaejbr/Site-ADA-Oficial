import Header from '../components/Header.tsx';
import HeroSection from "../components/home/HeroSection";
import MVVCard from "../components/home/MVVCard/MVVCard.tsx";
import MVVCardMobile from "../components/home/MVVCard/mobile/MVVCardMobile.tsx";

function Home(){
    return(
        <div className='relative'>
            <Header />
            <HeroSection />
            
            <div className='absolute left-0 right-0 z-20 flex justify-center -translate-y-1/2 mx-4'>
                <MVVCardMobile />
                <MVVCard />
            </div>
                
        </div>
    )
}

export default Home;