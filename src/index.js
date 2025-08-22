import React from 'react'
import ReactDOM from 'react-dom/client'
const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')

// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(<App />)