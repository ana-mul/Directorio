import React from 'react'
import ReactDOM from 'react-dom/client'
import Imagen from './assets/card-de.jpg'
import App from './components/app/App.jsx'
import './index.css'
import { Add } from './components/add-contact/add.jsx'
import { Contact } from './components/contact/contact.jsx'
import { List } from './components/contact-list/list.jsx'
import { Filter } from './components/filter/filter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Add />
    <Contact />
    <List />
    <Filter />
  </React.StrictMode>,
)
