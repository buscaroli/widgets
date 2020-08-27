import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    { title: 'Title ONE of the Accordion',
      content: 'Stet ea kasd nonumy ut consetetur amet takimata ea, amet dolores sed sed accusam sadipscing elitr, tempor accusam est sea dolor elitr dolor diam.'
    },
    { title: 'Title TWO of the Accordion',
      content: 'Aliquyam et ipsum amet at magna vero stet sanctus sanctus. Dolor eos.'
    },
    { title: 'Title THREE of the Accordion', 
      content: 'Sanctus sea lorem lorem ipsum eos amet takimata sea. Sit labore at labore gubergren ut, dolore.'
    }
    ]

    const options = [
      {
       label: 'Red',
       value: 'red'
    },
    {
      label: 'Green',
      color: 'green'
    },
    {
      label: 'Blue',
      color: 'blue'
    }
    ]

export default () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

    return(
      <div>
        <button onClick={() => setShowDropdown(!showDropdown)} >Toggle Dropdown</button>
         {showDropdown ? <Dropdown 
          selected={selected} 
          onSelectedChange={setSelected}
          options={options} 
        /> : null}
      </div>
       
    )
}