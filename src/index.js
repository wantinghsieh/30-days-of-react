// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
class App extends React.Component {
  // declaring state
  state = {
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
  }
  changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'
    let image = this.state.image === catURL ? dogURL : catURL
    this.setState({ image })
  }

  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>

        <button onClick={this.changeAnimal} class='btn btn-add'>
          Change
        </button>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(<App />)