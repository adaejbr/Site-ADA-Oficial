import { mvvData } from "./mvvData";

function MVVCard() {
    return (
        <div className="max-w-[1300px] w-full h-50 bg-primary rounded-4xl sm:px-10 xl:px-40 py-7 justify-between hidden lg:flex">
            {mvvData.map((item, index) => (
                <div
                    key={item.title}
                    className={`lg:w-1/3 ${
                        index < mvvData.length - 1
                            ? "border-r-4 border-secondary"
                            : ""
                    } ${index === 0 ? "pr-6" : index === 1 ? "px-6" : "pl-6"}`}
                >
                    <h3 className="sm:text-lg text-xl font-semibold element-appear pb-2 "
                        style={{ animationDelay: `${index * .2}s` }}
                    >
                        {item.title}
                    </h3>

                    <p className=" text-justify element-appear element-slide-up "
                        style={{ animationDelay: `${index * .2}s` }}
                    >
                        {item.message}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default MVVCard;