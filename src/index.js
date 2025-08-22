import React from 'react'
import ReactDOM from 'react-dom/client'

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}

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