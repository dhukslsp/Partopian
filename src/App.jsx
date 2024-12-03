import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="line horizontal-line"></div>
        <div class="line horizontal-line2"></div>
        <div class="line horizontal-line3"></div>
        <div class="line horizontal-line4"></div>
        <div class = "personContainer">
          <img src="./person1.webp" alt="" srcset="" />
        </div>
        <div class = "personContainer1">
          <img src="./person1.webp" alt="" srcset="" />
        </div>
        <div class = "personContainer2">
          <img src="./person1.webp" alt="" srcset="" />
        </div>
        <div class = "personContainer3">
          <img src="./person1.webp" alt="" srcset="" />
        </div>
        <div class = "maincontent">
          <h1 class = "title1">A World built on <br/> RESARCH <br/> not perfection</h1>
          <img src="./continents.jpg" alt="" srcset="" style = {{width:"100%",height:"80vh"}}/>
        </div>
      </div>
    </>
  )
}

export default App
