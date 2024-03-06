import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSearch,
  faUser,
  faEnvelope,
  faMobile,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import "../contact-list/list.css";

const List = (props) => {
  const { setContact, contact, remove } = props;

  return (
    <>
      <div>
        <section className="section-list">
          <div className="div-list">
            <ul>
              {contact.map((contacts, index) => (
                <div className="div-list-two">
                  <div>
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
                  <li key={index}>
                    <div className="div-line-list"></div>
                    <span className="span-contact">
                      {" "}
                      <FontAwesomeIcon className="fa-user" icon={faUser} />
                      <p className="p-name">NAME</p>
                      <p className="name">{contacts.name} </p>
                    </span>
                    <span className="span-contact">
                      <FontAwesomeIcon className="fa-mobile" icon={faMobile} />
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
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Este componente mostrará la lista de contactos.
Podría contener una estructura HTML para mostrar cada contacto individualmente, utilizando otro componente llamado Contacto.
También podría tener botones de eliminación asociados a cada contacto, que llamarían a una función para eliminar el contacto correspondiente. */}
    </>
  );
};

export { List };
