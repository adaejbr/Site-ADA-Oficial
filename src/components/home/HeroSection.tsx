import adahero from "../../assets/images/ada.webp";
import guibooright from "../../assets/images/guiboo_01.svg";
import guibooleft from "../../assets/images/guiboo_02.svg";
import herobg from "../../assets/images/herobg.webp"
import { Fragment } from "react";

function HeroSection(){
    const title = "Nossas soluções para o seu negócio";
    const words = title.split(" ");
    const delayTime = .12;
    const initialDelay = .2;

    const animationDuration = 0.3;
    const lastWordDelay = delayTime * (words.length - 1) + 0.3;

    const firstButtonDelay = lastWordDelay + animationDuration;
    const secondButtonDelay = firstButtonDelay + delayTime;
        
    return(
        <section className="bg-cover" style={{ backgroundImage: `url(${herobg})` }}>
            
            <div className="h-154 sm:h-156 max-w-270 mx-auto flex flex-col items-center sm:flex-row sm:items-center ">
                <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4 ">
                    <h1 className="text-white font-bold text-center max-w-xl mt-10 mx-6 text-[clamp(1.5rem,5vw,3rem)] leading-tight">
                        {words.map((word, index) => (
                            <Fragment key={index}>
                                <span
                                    className={`sm:mr-3 mr-2 font-highlight ${
                                            word === "Nossas"
                                                ? "element-slide-up element-appear "
                                                : "element-appear "
                                    }`
                                
                                }
                                    style={{
                                        animationDelay: `${index === 0 ? initialDelay : delayTime * index + 0.3}s`
                                    }}
                                >
                                        {word === "seu" || word === "negócio" ? (
                                            <span className=" text-primary">{word}</span>
                                        ) : (
                                            <span className=" text-default">{word}</span>
                                        )
                                        
                                        }
                                </span>

                                {index === 1 && <br className="block" />}
                                
                            </Fragment>
                        ))}
                    </h1>
                    <div className="p-3 flex gap-4 items-center justify-center">
                      <button className="rounded-xl bg-default px-4 py-3 element-appear element-slide-up" style={{animationDelay:`${firstButtonDelay}s`}}>Comece já</button>
                      <button className="rounded-xl border-2 border-default px-4 py-3 text-default element-appear element-slide-up" style={{animationDelay:`${secondButtonDelay}s`}}>Veja mais</button>
                    </div>
                </div>

                <div className="relative h-auto w-full items-end justify-center overflow-hidden sm:h-full sm:w-1/2">
                    <img className="element-slide-up absolute z-0 bottom-[45%] right-[42%] w-50 h-auto opacity-100 rotate-[-10] sm:w-65 sm:right-[42%] sm:bottom-[49%] float" 
                    src={guibooleft}
                    alt="Guiboo" />

                    <img className="element-slide-up absolute z-0 w-50 h-auto opacity-100 rotate-30 sm:w-65 left-[52%] top-[25%]  sm:left-[55%] sm:top-[25%] float "
                    style={{animationDelay: "-.5s"}} 
                    src={guibooright}
                    alt="Guiboo" />

                    <img
                        className="element-slide-up h-full right-0 w-full object-contain object-bottom relative z-10"
                        src={adahero}
                        alt="ADA Hero Section"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;

