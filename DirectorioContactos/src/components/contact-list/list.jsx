import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import '../contact-list/list.css';

const List = (props) => {
  const { contact, remove } = props;

  //Este componente mostrará la lista de contactos.
  // Deberá recibir la lista de contactos como prop del componente App.
  // Deberá tener la capacidad de eliminar contactos, lo que implicará llamar a una función en el componente App para actualizar el estado.

  return (
    <>
    <section className="section-list">
    <div className="div-span-list">
        <span className="add-span-list">
            <a href="#" className="add-a" >
              Add
            </a>
          </span>
          <span className="search-span-filter">
            <a href="#" target="_blank" className="search-a">
              Search
            </a>
          </span>
          <span className="close-span-filter">
            <a href="#" target="_blank" className="close-a">
              Close
            </a>
          </span>
        </div>
    <div className="div-list">
        <ul>
          {contact.map((contacts, index) => (
            <li key={index}>
              <div>
                {contacts.name}{" "}
                <FontAwesomeIcon
                  className="fa-trash"
                  icon={faTrash}
                  onClick={() =>
                    remove(
                      contacts.name,
                      contacts.phone,
                      contacts.email,
                      contacts.notes
                    )
                  }
                />
              </div>
              <div>{contacts.phone}</div>
              <div>{contacts.email}</div>
              <div>{contacts.notes}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
     
      {/* Este componente mostrará la lista de contactos.
Podría contener una estructura HTML para mostrar cada contacto individualmente, utilizando otro componente llamado Contacto.
También podría tener botones de eliminación asociados a cada contacto, que llamarían a una función para eliminar el contacto correspondiente. */}
    </>
  );
};

export { List };
