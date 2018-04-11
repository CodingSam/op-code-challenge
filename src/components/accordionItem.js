import React from 'react'
import chevronUp from '../icons/chevron-u.svg'
import chevronDown from '../icons/chevron-d.svg'
import AccordionItemTitle from './accordionItemTitle';
import AccordionItemDescription from './accordionItemDescription';

const AccordionItem = ({children, active, onClick, title, description}) => {

  const chevron = active ? chevronUp : chevronDown
  const content = children

  return (
    <div onClick={onClick} className={`accordionItem${active ? ' active': ''}`}>
      <div className="accordionItemInfoContainer">
        <div className="accordionItemInfo">
          <AccordionItemTitle>{title}</AccordionItemTitle>
          <AccordionItemDescription>{description}</AccordionItemDescription>
        </div>
        <img src={chevron} className="chevron" alt="chevron" />
      </div>
      {active ? content : null}
    </div>
  )
}

export default AccordionItem
