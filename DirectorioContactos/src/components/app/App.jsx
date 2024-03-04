import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Add } from "../add-contact/add.jsx";
import { Contact } from "../contact/contact.jsx";
import { List } from "../contact-list/list.jsx";
import { Filter } from "../filter/filter.jsx";


function App() {
  //  estado global de la aplicación y gestionará la lista de contactos
  //funciones para agregar nuevos contactos, eliminar contactos existentes y filtrar la lista de contactos

  const [contact, setContact] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [screen, setScreen] = useState("");

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputPhone = (event) => {
    setPhone(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputNotes = (event) => {
    setNotes(event.target.value);
  };

  //FUNCION AGREGAR CONTACTOS

  const add = () => {
    if (name.trim() && phone.trim() && email.trim() !== "") {
      //aca controlo que no este libre el input
      //.trim ayuda a que la funcion no tome en cuenta espacios en blanco
      //no agrego notes en el condicional porque no quiero que sea obligatoria
      const newContact = {
        name: name,
        phone: phone,
        email: email,
        notes: notes,
      }; //si no esta libre, creo el contacto (este pasaria a se el estado actual)

      const adding = [...contact, newContact]; //se crea una varible que sume el nuevo contacto a la lista anterior
      setContact(adding); //actualizo el estado que contiene el array
      setName(""); //vacio el input
      setPhone("");
      setEmail("");
      setNotes("");
    }
  };

  //FUNCION FILTRAR

  const find = () => {
    //al agregar este parametro hace la funcion mas flexible
    return contact.filter((contacts) => {
      //aca filtro la lista de contactos
      // const includes =
      contacts.name.toLowerCase().includes(screen.toLowerCase()) ||//aca especificamente con nombre, primero nomralizo en minuscula para que no haya equivocacion
      //verifico si el nombre empieza con determinada letra
      //vuelvo a usar filter() y normalizo la palabra en minisucula para poder comparar
      // contacts.phone.toLowerCase().includes(screen.toLowerCase()) ||
      // contacts.email.toLowerCase().includes(screen.toLowerCase()) ||
      // contacts.notes.toLowerCase().includes(screen.toLowerCase());
      
      console.log("Contacto:", contacts.name, "Coincide:", includes);
      // return includes;
    });
  };

  const handleInputChange = (e) => {
    console.log("Valor de screen:", e.target.value);
    setScreen(e.target.value);
  };

  //FUNCION ELIMINAR

  const remove = (who) => {
    const index = contact.findIndex((contacts) => contacts.name === who); //una variable que incluye la funcion de filtro antes declarada
    //el metodo findIndex() que especifica el indice, en este caso del contacto que buscamos

    if (index !== -1) {
      //aca verificamos que encontro el contacto (sin findIndex no encuentra un elemento arroja -1)
      const newList = [...contact.slice(0, index), ...contact.slice(index + 1)]; //creamos una lista nueva que filtra el contacto a eliminar
      //para eso primero separamos el array con todos los elementos antes del contacto a eliminar, y con todos los elementos despues del contactoa eliminar

      setContact(newList); //actualizo el estado
    }
  };

  return (
    <>
      <div>
        <Add
          contact={contact}
          setContact={setContact}
          name={name}
          phone={phone}
          email={email}
          notes={notes}
          add={add}
          inputNa={inputName}
          inputP={inputPhone}
          inputE={inputEmail}
          inputNo={inputNotes}
        />
        <Contact
          contact={contact}
          setContact={setContact}
          name={name}
          phone={phone}
          email={email}
          notes={notes}
        />
        <List setContact={setContact} contact={contact} remove={remove} />
        <Filter
          setContact={setContact}
          contact={contact}
          find={find}
          screen={screen}
          setScreen={setScreen}
          handleInputChange={handleInputChange}
        />
        {/* <input type="text" onChange={inputName} value={name} />
        <button onClick={add}>submit</button> */}
      </div>
    </>
  );
}

export default App;
