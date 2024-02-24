import { useState } from "react";
import "./App.css";

function App() {
  //  estado global de la aplicación y gestionará la lista de contactos.
  //funciones para agregar nuevos contactos, eliminar contactos existentes y filtrar la lista de contactos.

  const [contact, setContact] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");


  const [filter, setFilter] = useState("");

  const randomID = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const inputEvent = (event) => {
    setAddContact(event.target.value);
  };

  const add = () => {
    if (name.trim() && phone.trim() && email.trim() !== "") {
      //aca controlo que no este libre el input
      //.trim ayuda a que la funcion no tome en cuenta espacios en blanco
      //no agrego notes en el condicional porque no quiero que sea obligatoria
      const newContact ={
        name: name,
        phone: phone,
        email: email,
        notes: notes
      }; //si no esta libre, creo el contacto (este pasaria a se el estado actual)
    
      const adding = [...contact, newContact]; //se crea una varible que sume el nuevo contacto a la lista anterior
      setContact(adding); //actualizo el estado que contiene el array
      setName(""); //vacio el input
      setPhone ("");
      setEmail("");
      setNotes("");
    };
  };

  return (
    <>
      <div>
        <input type="text" onChange={inputEvent} value={addName} />
        <button onClick={add}>submit</button>
      </div>
    </>
  );
}

export default App;
