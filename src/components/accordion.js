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
            <div className="accordionItemContentSection">
              <h3>Sijoittaprofiili</h3>
              <div className="row">
                <p className="label">Voimassaoloaika</p>
                <p className="value">1.12.2018 asti</p>
              </div>
              <div className="row">
                <p className="label">Sijoittaprofiili</p>
                <p className="value">Tuottohakuinen</p>
              </div>
            </div>
            <div className="divider" />
            <div className="accordionItemContentSection">
              <h3>Sijoittajan palvelukokonaisuus</h3>
              <div className="row">
                <p className="label">Sijoittajan palvelupaketti</p>
                <p className="value">Säästäjä</p>
              </div>
              <div className="row">
                <p className="label">Arvopaperisäilytys</p>
                <p className="value">OP Helsinki</p>
              </div>
              <div className="row">
                <p className="label">Säilytyksen tunnus</p>
                <p className="value">12121212</p>
              </div>
              <div className="row">
                <p className="label">Arvo-osuustilin numero</p>
                <p className="value">235678</p>
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
