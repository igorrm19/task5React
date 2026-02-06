import { useEffect, useState } from "react";


function Timer({ hidden }) {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const Interval = setInterval(() => {
            setSegundos((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(Interval);
        }
    }, []);

    return (
        <>
            <div className="Timer" style={{ display: hidden ? "none" : "flex" }}>
                <h2 >Tempo: {segundos}s</h2>
            </div>
        </>
    )
}

export default Timer;