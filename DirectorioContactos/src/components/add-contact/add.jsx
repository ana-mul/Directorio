import React, { useState } from "react";
import "./add.css";

const Add = (props) => {
  // Este componente contendrá un formulario para agregar nuevos contactos.
  // Deberá manejar los eventos de entrada del formulario y enviar la información del nuevo contacto al componente App para ser agregado a la lista de contactos.

  const { name, phone, email, notes, add, inputNa, inputP, inputE, inputNo, showForm, toggleSection } = props;
  console.log("showForm:", showForm);
  return (
    <>
      {/* 
Este componente se encargaría de contener el formulario para agregar nuevos contactos.
Debería tener los campos de entrada (inputs) necesarios para ingresar la información del contacto, como nombre, número de teléfono, dirección, etc. */}
      <div>
        {showForm && (
      <section className="section-add">
        <div>
          <form className="form" action="">
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={inputNa} value={name}/>
            <label htmlFor="">Teléfono</label>
            <input type="number" onChange={inputP} value={phone} />
            <label htmlFor="">E-mail</label>
            <input type="email" onChange={inputE} value={email} />
            <label htmlFor="">Notas</label>
            <textarea name="" id="" cols="30" rows="10" onChange={inputNo} value={notes}></textarea>
            <button onClick={(e) => { e.preventDefault(); add(); }}>Agregar contacto</button>
          </form>
        </div>
        <span className="add-span-add">
            <a href="#" className="add-a" onClick={toggleSection}>
              Add
            </a>
          </span>
          <span className="contact-span-add">
            <a href="#" target="_blank" className="contact-a">
              Contacts
            </a>
          </span>
      </section>
      )}
      </div>
      
    </>
  );
};

export { Add };
