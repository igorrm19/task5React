import { useEffect, useState } from "react";


function Timer() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setSegundos((prev) => ++prev);
        }, 1000);

        return () => {
            clearInterval(Interval);
        }
    }, []);

    return (
        <>
            <div className="Timer">
                <h2>Tempo: {segundos}s</h2>
            </div >
        </>
    )
}

export default Timer;