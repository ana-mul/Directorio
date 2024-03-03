import { useState } from "react";
import "./App.css";
import { Add } from "../add-contact/add.jsx";

function App() {
  //  estado global de la aplicación y gestionará la lista de contactos
  //funciones para agregar nuevos contactos, eliminar contactos existentes y filtrar la lista de contactos

  const [contact, setContact] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [filter, setFilter] = useState("");

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

  const find = (filter) => {
    //al agregar este parametro hace la funcion mas flexible
    return contact.filter((contacts) => {
      //aca filtro la lista de contactos
      contact.name.toLowerCase().startsWith(filter.toLowerCase()); //aca especificamente con nombre, primero nomralizo en minuscula para que no haya equivocacion
      //verifico si el nombre empieza con determinada letra
      //vuelvo a usar filter() y normalizo la palabra en minisucula para poder comparar
    });
  };

  //FUNCION ELIMINAR

  const remove = (who) => {
    const index = find(who).findIndex((contacts) => contacts.name === who); //una variable que incluye la funcion de filtro antes declarada
    //el metodo findIndex() que especifica el indice, en este caso del contacto que buscamos

    if (index !== -1) {
      //aca verificamos que encontro el contacto (sin findIndex no encuentra un elemento arroja -1)
      const newList = contact.filter((contacts) => contacts.name !== who); //creamos una lista nueva que filtra el contacto a eliminar
      //

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
        {/* <input type="text" onChange={inputName} value={name} />
        <button onClick={add}>submit</button> */}
      </div>
    </>
  );
}

export default App;
