import adahero from "../../assets/images/ada.webp";
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
            
            <div className="h-156 max-w-234 mx-auto flex-col flex items-center sm:flex-row overflow-hidden">
                <div className="flex flex-col justify-between gap-4 sm:h-48">
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

                <img className="sm:h-full sm:object-contain element-slide-up" src={adahero} alt="Ada Hero Section" />
            </div>
        </section>
    )
}

export default HeroSection;

