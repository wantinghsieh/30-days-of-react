// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'


// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const rootElement = document.getElementById('root')

// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX

root.render(<Header />)