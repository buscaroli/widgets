import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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
    color: 'red'
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


const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />
  } 
}

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />
  }
}

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}


export default () => {
  return(
    <div>
      {showAccordion()} 
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
      
  )
}