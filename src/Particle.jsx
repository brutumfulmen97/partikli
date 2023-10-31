import { Keyframes } from "./Keyframes";

export default function Particle({ duration, delay }) {
    const randomValue = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomOffset = randomValue(0, 40);
    const randomAngle = randomValue(0, 5);

    function getRandomSign() {
        return Math.random() < 0.5 ? -1 : 1;
    }

    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    //TODO: random slika umesto kruzica u boji

    const style = {
        width: "20px",
        height: "20px",
        offsetPath: `path("M20,${randomOffset * getRandomSign() + 150} C30,${
            randomOffset * getRandomSign() + 60
        } 250,${randomOffset * getRandomSign() + 120} 500,${
            randomOffset * getRandomSign() + 30
        }")`,
        borderRadius: "10px",
        background: getRandomColor(),
        rotate: `${randomAngle}deg`,
        animation: `move ${duration}ms ${delay}ms linear forwards, fade ${
            duration / 2
        }ms ${delay * 2}ms linear forwards`,
        animationIterationCount: Math.random(),
        position: "absolute",
    };

    console.log(duration, delay);

    return (
        <div style={style}>
            <Keyframes
                name="move"
                _0={{ offsetDistance: "0%" }}
                _100={{ offsetDistance: `100%` }}
            />
            <Keyframes name="fade" _0={{ opacity: 0 }} _100={{ opacity: 1 }} />
        </div>
    );
}
