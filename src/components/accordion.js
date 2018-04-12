import React, { Component } from 'react'
import AccordionItem from './accordionItem'
import AccordionItemContent from './accordionItemContent'

class Accordion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 1
    }
  }

  onRowClick(index) {
    const newIndex = this.state.activeIndex === index ? null : index
    this.setState({activeIndex: newIndex})
  }

  render() {
    return (
      <div className="accordion">
        <AccordionItem
          chevron={true}
          active={this.state.activeIndex === 0}
          onClick={this.onRowClick.bind(this, 0)}
          title="Omat tiedot"
          description="Etiam varius consequat eros sed convallis"
        >
          <AccordionItemContent>Content</AccordionItemContent>
        </AccordionItem>
        <AccordionItem
          chevron={true}
          active={this.state.activeIndex === 1}
          onClick={this.onRowClick.bind(this, 1)}
          title="Tuote ja sopimustiedot"
          description="Etiam malesuada sapien quis enim tincidunt auctor donec tellus"
        >
          <AccordionItemContent>
            <div className="accordion__content-section">
              <h3 className="accordion__sub-title">Sijoittaprofiili</h3>
              <div className="accordion__row">
                <p className="accordion__label">Voimassaoloaika</p>
                <p className="accordion__value">1.12.2018 asti</p>
              </div>
              <div className="accordion__row">
                <p className="accordion__label">Sijoittaprofiili</p>
                <p className="accordion__value">Tuottohakuinen</p>
              </div>
            </div>
            <div className="accordion__divider" />
            <div className="accordion__content-section">
              <h3 className="accordion__sub-title">Sijoittajan palvelukokonaisuus</h3>
              <div className="accordion__row">
                <p className="accordion__label">Sijoittajan palvelupaketti</p>
                <p className="accordion__value">Säästäjä</p>
              </div>
              <div className="accordion__row">
                <p className="accordion__label">Arvopaperisäilytys</p>
                <p className="accordion__value">OP Helsinki</p>
              </div>
              <div className="accordion__row">
                <p className="accordion__label">Säilytyksen tunnus</p>
                <p className="accordion__value">12121212</p>
              </div>
              <div className="accordion__row">
                <p className="accordion__label">Arvo-osuustilin numero</p>
                <p className="accordion__value">235678</p>
              </div>
            </div>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem
          chevron={true}
          active={this.state.activeIndex === 2}
          onClick={this.onRowClick.bind(this, 2)}
          title="Palveluiden käyttö"
          description="Lorem ipsum dolor sit amet"
        >
          <AccordionItemContent>Content</AccordionItemContent>
        </AccordionItem>
      </div>
    )
  }
}

export default Accordion
