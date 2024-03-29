import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faSearch,
  faUser,
  faEnvelope,
  faMobile,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import "../filter/filter.css";

const Filter = (props) => {
  const { find, screen, handleInputChange } = props;

  return (
    <>
    <section>
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
              <div className="div-span">
                <li key={index}>
                  <div className="div-line-filter"></div>
                  <span className="span-contact">
                    <FontAwesomeIcon className="fa-user" icon={faUser} />
                    <p className="p-name">NAME</p>
                    <p className="name">{contacts.name}</p>
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
    </>
  );
};

export { Filter };
