import React from 'react'
import ReactDOM from 'react-dom/client'

const Skills = (props) => <ul>{props.skills}</ul>

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')

// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(<App />)