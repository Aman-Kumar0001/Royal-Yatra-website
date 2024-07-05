import './App.css'
import { Accordion } from './components/Accordion'
import { Alerts } from './components/Alerts'
import Carosel from './components/Carosel'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import { Section3 } from './components/Section3'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { Section6 } from './components/Section6'
import { Traveltop } from './components/Traveltop'
import { Section7 } from './components/Section7'


function App() {
  return (
    <>
      <Navbar />
      <Carosel />
      <div className='linear-bg'>
        <Traveltop />
        <Section1 />
      </div>
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      <Accordion/>
      <Alerts/>
      <Section6/>
      <Section7/>
    </>
  )
}

export default App
