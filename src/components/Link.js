import React from 'react'
import { getDefaultNormalizer } from '@testing-library/react'

const Link = ({ className, href, children}) => {
    const onClick = (event) => {
        // A little workaround to allow CTRL+click to open in a new tab.
        if (event.metaKey || event.ctrlKey) return;

        // prevent the page from refreshing and sending requests
        event.preventDefault()
        // keeping the url in sync with what we are clicking (forcing the 
        // url in the address bar to what we are clicking so that we can 
        // click and paste the url for example).
        window.history.pushState({}, '', href)

        // Communicating to the Route components that the url has
        // just changed.
        // Adding some code inside Route.js that allows the route components
        // to listen to this event.
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    
    return(
        <a 
            onClick={onClick}
            className={className} 
            href={href} 
        >
            {children}
        </a>
    )
}

export default Link