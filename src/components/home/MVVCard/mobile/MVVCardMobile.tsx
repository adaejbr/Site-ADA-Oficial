
import { useState, useEffect } from "react";
import { mvvData } from "../mvvData";
import MVVProgress from "./MVVProgress";

function MVVCardMobile() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((current) => (current + 1) % mvvData.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const currentMVV = mvvData[currentIndex];

    return (
        <div className="max-w-200 w-full h-50 bg-primary border-default/50 border rounded-4xl px-10 py-6 text-justify justify-between flex flex-col lg:hidden">
            <h3
                key={`title-${currentIndex}`}
                className="text-xl font-medium element-appear element-slide-up"
            >
                {currentMVV.title}
            </h3>

            <div className="flex-1 min-h-0 overflow-y-auto my-1">
                <p
                    key={`message-${currentIndex}`}
                    className="element-appear element-slide-up"
                >
                    {currentMVV.message}
                </p>
            </div>

            <MVVProgress
                currentIndex={currentIndex}
                total={mvvData.length}
            />
        </div>
    );
}

export default MVVCardMobile;
