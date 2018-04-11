import React, { Component } from 'react'
import chevronDown from '../icons/chevron-d.svg'
import AccordionItemTitle from './accordionItemTitle';
import AccordionItemDescription from './accordionItemDescription';

class AccordionItem extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(() => {
      this.setState({height: this.refs["accordionItemContentContainer"].children[0].clientHeight + 1})
    })
  }

  render() {
    const {children, active, onClick, title, description} = this.props
    const chevron = chevronDown
    const content = children
    const height = active ? this.state.height : 0

    return (
      <div onClick={onClick} className={`accordionItem${active ? ' active': ''}`}>
        <div className="accordionItemInfoContainer">
          <div className="accordionItemInfo">
            <AccordionItemTitle>{title}</AccordionItemTitle>
            <AccordionItemDescription>{description}</AccordionItemDescription>
          </div>
          <img src={chevron} className="chevron" alt="chevron" />
        </div>
        <div style={{height}} ref="accordionItemContentContainer" className="accordionItemContentContainer">
          {content}
        </div>
      </div>
    )
  }
}

export default AccordionItem
