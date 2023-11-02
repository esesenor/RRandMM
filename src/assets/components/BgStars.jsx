function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

const BgStar = () => {
    const numStars = 122; 
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        const size = getRandomValue(1, 7);
        const left = `${getRandomValue(0, 100)}%`;
        const top = `${getRandomValue(0, 100)}%`;
        const animationDuration = `${getRandomValue(1, 7)}s`;
        const animationDelay = `${getRandomValue(0, 5)}s`;

        const starStyle = {
            width: `${size}px`,
            height: `${size}px`,
            left: left,
            top: top,
            animationDuration: animationDuration,
            animationDelay: animationDelay
        };

        stars.push(
            <div
                key={i}
                className=" bg-[#aae606] rounded-full absolute -z-[100] animate-fn1 shadow-md shadow-yellow-200"
                style={starStyle}
            ></div>
        );
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black -z-[100] overflow-hidden">
            {stars}
        </div>
    );
}

export default BgStar;
