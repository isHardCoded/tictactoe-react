import { useEffect, useState } from "react"

const Title = () => {
    const [titleIndex, setTitleIndex] = useState(0)
    const titles = ['Tic', 'Tac', 'Toe']

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className="title">
            <h1>Play! {titles[titleIndex]}</h1>
        </div>
    )
}

export default Title