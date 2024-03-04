import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const { setContact, contact, find, setScreen, screen, handleInputChange } = props;
  // //Este componente permitirá a los usuarios filtrar la lista de contactos según ciertos criterios.
  // Deberá manejar los eventos de entrada del filtro y enviar la información de filtrado al componente App para que actualice la lista.

  return (
    <>
      <div>
        <input
          type="text"
          value={screen}
          onChange={handleInputChange}
          placeholder="Buscar contacto"
        />
        <FontAwesomeIcon className="fa-search" icon={faSearch} />
      </div>
      <div>
        <ul>
            {screen && contact.filter(find).map((contacts, index)=>(
                <li key={index}>
                    <p>{contacts.name}</p>
                    <p>{contacts.phone}</p>
                    <p>{contacts.email}</p>
                    <p>{contacts.notes}</p>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Filter };
