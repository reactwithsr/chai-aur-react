import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App ! Chai</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href:"https://google.com",
//         target: '_blank'
//     },
//     Children: 'Click to visit Google'

// }

const anotherElement = (
  <a href="https://www.google.com" target='_ blank'>visit google</a>
)


const dusraElement = "Tripti Pal"

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.facebook.com',target:'_blank'},
  'click me to visit facebook',
  dusraElement


)

createRoot(document.getElementById('root')).
render(

  // anotherElement
  ReactElement
  // <App/>
  
)
