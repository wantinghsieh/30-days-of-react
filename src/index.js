// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import frontendTechnologies from './images/frontend_technologies.png'

const tech = (
  <div>
    <img src={frontendTechnologies} alt='frontend technologies' />
  </div>
)

const rootElement = document.getElementById('root')
// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(tech)