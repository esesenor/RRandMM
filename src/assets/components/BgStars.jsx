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
            animationDelay: animationDelay,
        };

        stars.push(
            <div
                key={i}
                className="star bg-white rounded-full absolute"
                style={starStyle}
            ></div>
        );
    }

    return (
        <div className="stars w-screen h-screen bg-black absolute overflow-hidden">
            {stars}
        </div>
    );
}

export default BgStar;
