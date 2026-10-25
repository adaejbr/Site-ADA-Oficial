
type MVVProgressProps = {
    currentIndex: number;
    total: number;
};

function MVVProgress({ currentIndex, total }: MVVProgressProps) {
    return (
        <div className="flex w-full gap-2 mt-auto pt-2">
            {Array.from({ length: total }, (_, index) => (
                <div
                    key={index}
                    className="h-1 flex-1 overflow-hidden rounded-full bg-secondary/20"
                >
                    <div
                        className={`h-full rounded-full bg-secondary ${
                            index < currentIndex
                                ? "w-full"
                                : index === currentIndex
                                    ? "animate-progress"
                                    : "w-0"
                        }`}
                    />
                </div>
            ))}
        </div>
    );
}

export default MVVProgress;
