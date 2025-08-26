import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Home component
const Home = (props) => <h1>Welcome Home</h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

const rootElement = document.getElementById('root')
// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(<App />)