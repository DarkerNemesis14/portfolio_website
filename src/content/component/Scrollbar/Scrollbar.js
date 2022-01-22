import "./Scrollbar.css"
import { useEffect, useState } from "react"

const Scrollbar = () => {
    const [userScroll, setUserScroll] = useState(0)

    useEffect (() => {
        const onScroll = () => {
            const scrolled = document.documentElement.scrollTop
            const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const height = (scrolled / pageHeight) * 100
            const progressBar = document.getElementsByClassName("proBar")
            setUserScroll(height)
            }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    })
    
    return (
        <div className="proSection">
            <div className="barWrapper">
                <div className="proBar" style={{height : `${userScroll}%`}}></div>
            </div>
        </div>
    );
}
 
export default Scrollbar;