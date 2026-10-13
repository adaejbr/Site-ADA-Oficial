import adahero from "../../assets/images/ada.webp";
import herobg from "../../assets/images/herobg.webp"

function HeroSection(){
    const title = "Nossas soluções para o seu negócio";
    const words = title.split(" ");
    
    return(
        <section className="bg-cover" style={{ backgroundImage: `url(${herobg})` }}>
            
            <div className="h-156 max-w-4xl mx-auto flex-col flex items-center sm:flex-row overflow-hidden">
                <div className="flex flex-col justify-between gap-4 sm:h-48">
                    <h1 className="text-white font-bold text-4xl text-center max-w-xl mt-10 mx-6 sm:text-5xl">
                        {words.map((word, index) => (<span key={index}> {word}{" "}</span>))}                        
                    </h1>
                    <div className="p-3 flex gap-4 items-center justify-center">
                      <button className="rounded-xl bg-amber-50 px-4 py-3">Comece já</button>
                      <button className="rounded-xl border-2 border-amber-50 px-4 py-3 text-amber-50">Veja mais</button>
                    </div>
                </div>

                <img className="sm:h-full sm:object-contain" src={adahero} alt="Ada Hero Section" />
            </div>
        </section>
    )
}

export default HeroSection;