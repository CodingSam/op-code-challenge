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
      this.setState({height: this.refs["accordion__content-container"].children[0].clientHeight + 1})
    })
  }

  render() {
    const {children, active, onClick, title, description} = this.props
    const chevron = chevronDown
    const content = children
    const height = active ? this.state.height : 0

    return (
      <div onClick={onClick} className={`accordion__item ${active ? 'accordion__item--active': ''}`}>
        <div className="accordion__info-container">
          <div className="accordion__info">
            <AccordionItemTitle>{title}</AccordionItemTitle>
            <AccordionItemDescription>{description}</AccordionItemDescription>
          </div>
          <img src={chevron} className="accordion__chevron" alt="chevron" />
        </div>
        <div style={{height}} ref="accordion__content-container" className="accordion__content-container">
          {content}
        </div>
      </div>
    )
  }
}

export default AccordionItem
