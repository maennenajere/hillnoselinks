import { useEffect, useState } from "react"

const Snowflakes = ({ className = "text-white" }) => {
    const [snowflakes, setSnowflakes] = useState([])

    useEffect(() => {
        const flakes = []
        for (let i = 0; i < 50; i++) {
            flakes.push({
                id: i,
                left: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 10,
                opacity: Math.random() * 0.6 + 0.2
            })
        }
        setSnowflakes(flakes)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {snowflakes.map(flake => (
                <div
                    key={flake.id}
                    className={`snowflake absolute ${className}`}
                    style={{
                        left: `${flake.left}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        backgroundColor: "currentColor",
                        borderRadius: "50%",
                        animationDuration: `${flake.duration}s`,
                        animationDelay: `${flake.delay}s`,
                        opacity: flake.opacity
                    }}
                />
            ))}
        </div>
    )
}

export default Snowflakes