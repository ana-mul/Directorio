import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faSearch,
  faUser,
  faEnvelope,
  faPhone,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import "../filter/filter.css";

const Filter = (props) => {
  const { find, screen, handleInputChange } = props;
  // //Este componente permitirá a los usuarios filtrar la lista de contactos según ciertos criterios.
  // Deberá manejar los eventos de entrada del filtro y enviar la información de filtrado al componente App para que actualice la lista.

  return (
    <>
      <div className="div-filter-input">
        <input
          type="text"
          value={screen}
          onChange={handleInputChange}
          placeholder="Search Contact"
          className="input-filter"
        />
        <FontAwesomeIcon className="fa-search" icon={faSearch} />
      </div>
      <div className="div-filter-results">
        <ul className="ul-filter">
          {screen &&
            find().map((contacts, index) => (
              <li key={index}>
                <div className="div-span">
                  <span className="span-contact">
                    <FontAwesomeIcon className="fa-user" icon={faUser} />
                    <p className="p-name">NAME</p>
                    <p className="name">{contacts.name}</p>
                  </span>
                  <span className="span-contact">
                    <FontAwesomeIcon className="fa-phone" icon={faPhone} />
                    <p>{contacts.phone}</p>
                  </span>
                  <span className="span-contact">
                    <FontAwesomeIcon
                      className="fa-envelope"
                      icon={faEnvelope}
                    />
                    <p>{contacts.email}</p>
                  </span>
                  <span className="span-contact">
                    <FontAwesomeIcon
                      className="fa-pen-fancy"
                      icon={faPenFancy}
                    />
                    <p>{contacts.notes}</p>
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Filter };
