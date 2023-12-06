import "./Scrollbar.css"
import { useState } from "react"

const Scrollbar = () => {
    const [userScroll, setUserScroll] = useState(0)

    const onScroll = () => {
        const scrolled = document.documentElement.scrollTop
        const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const height = (scrolled / pageHeight) * 100
        setUserScroll(height)
    }

    window.addEventListener("scroll", onScroll);
    
    return (
        <div className="barSection">
                <div className="progressBar" style={{height : `${userScroll}%`}}></div>
        </div>
    );
}
 
export default Scrollbar;