import { useEffect, useState } from "react";

export default function useWhenResize(){
    const [currentWidth, setCurrentWidth] = useState(0)
    useEffect(()=>{
        setCurrentWidth(window.innerWidth)
        let debaounce = 500
        let currentBuffer;
        function whenResize() {
            clearTimeout(currentBuffer)
            currentBuffer = setTimeout(() => {
                let currentWidth = window.innerWidth;

                setCurrentWidth(currentWidth)
            }, debaounce)
        }

        
            window.addEventListener('resize', whenResize);
            return () => window.removeEventListener('resize', whenResize)
        },[])


    return currentWidth
}