// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'


const title = <h1>SUBSCRIBE</h1>
const subTitle = <p>sign up with email to receive new and updates. </p>
const firstname = <button>first name</button>;
const lastname = <button>last name</button>;
const email = <button>email</button>;
const subscribe = <button>Subscribe</button>;
const app = (
  <div>
    {title}
    {subTitle}
    <div style={{ display: "flex", gap: "10px" }}>
    {firstname}
    {lastname}
    {email}
    </div>
    {subscribe}
  </div>
)


const rootElement = document.getElementById('root')
// create a root
const root = ReactDOM.createRoot(rootElement)

// render the JSX
root.render(app)