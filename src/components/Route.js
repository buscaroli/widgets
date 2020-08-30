import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
    // Keeping track of the current (address) path
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    // When clicking a Link on the Header go to that path
    // We are not sending new requests: see Link.js
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname )
        }
        

        window.addEventListener('popstate', onLocationChange)

        // CLearing the event listener. It is something we always do
        // after using useEffect, and it's also the reason why we had
        // to name the event listener in the first place.
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    
    return currentPath === path
        ? children
        : null
}

export default Route