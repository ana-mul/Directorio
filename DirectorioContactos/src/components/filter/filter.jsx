import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../filter/filter.css";

const Filter = (props) => {
  const { setContact, contact, find, setScreen, screen, handleInputChange } =
    props;
  // //Este componente permitirá a los usuarios filtrar la lista de contactos según ciertos criterios.
  // Deberá manejar los eventos de entrada del filtro y enviar la información de filtrado al componente App para que actualice la lista.

  return (
    <>
      <section className="section-filter">
        <div>
          <input
            type="text"
            value={screen}
            onChange={handleInputChange}
            placeholder="Buscar contacto"
            className="input-filter"
          />
          <FontAwesomeIcon className="fa-search" icon={faSearch} />
        </div>
        <div>
          <ul className="ul-filter">
            {screen &&
              find().map((contacts, index) => (
                <li key={index}>
                  <p className="name">{contacts.name}</p>
                  <p>{contacts.phone}</p>
                  <p>{contacts.email}</p>
                  <p>{contacts.notes}</p>
                </li>
              ))}
          </ul>
        </div>
        <span className="add-span-filter">
            <a href="#" className="add-a" >
              Add
            </a>
          </span>
          <span className="contact-span-filter">
            <a href="#" target="_blank" className="contact-a">
              Contacts
            </a>
          </span>
      </section>
    </>
  );
};

export { Filter };
