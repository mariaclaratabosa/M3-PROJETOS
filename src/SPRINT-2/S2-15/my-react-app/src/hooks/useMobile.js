import { useEffect, useState } from "react"

export const useMobile = (breakpoint) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth < breakpoint) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        handleResize()

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return isMobile
}