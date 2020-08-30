import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    // Using the useRef Hook to deal with event bubbling.
    // When clicking out of the dropdown menu we still want the
    // app to be able to close the menu.
    // Also added the onBodyClick function to dealt with the 
    // situation where you remove a DOM element that has an associated
    // event listener that would give you errors if evoked after the
    // element has been removed.
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return
            } else {
                setOpen(false)
            }
        }

        document.body.addEventListener('click', onBodyClick)
        
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const renderedOptions = options.map( (option, index) => {
        
        return(
            <div 
                key={index} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })


    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)}    
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div 
                        className={`menu ${ open ? 'visible transition' : ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dropdown