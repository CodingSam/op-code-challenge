import React, { Component } from 'react'
import Accordion from './components/accordion'
import AccordionItem from './components/accordionItem'

class App extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <h1>Selaile tietojasi</h1>
        </header>
        <Accordion>
          <AccordionItem>
            
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
}

export default App
