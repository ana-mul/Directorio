import { useState } from "react";
import "./App.css"

function App(props) {
  return (
    <>
      <section>
        <div className="book-container">
          <div className="front-container">
            <img src={props.imagePath} alt="" />
            <h1>Mis Contactos</h1>
          </div>
          <div className="side-container">
              <div className="spiral spiral-one"></div>
              <div className="spiral spiral-two"></div>
              <div className="spiral spiral-three"></div>
              <div className="spiral spiral-four"></div>
              <div className="spiral spiral-five"></div>
            </div>
          <span className="add-span">
            <a href="#" className="add-a">
              Add
            </a>
          </span>
          <span className="contact-span">
            <a href="#" target="_blank" className="contact-a">
              Contacts
            </a>
          </span>
        </div>
        <div className="book-open">
          
        </div>
      </section>
    </>
  );
}

export default App;
