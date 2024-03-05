import { useState } from "react";
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
    return contact.filter((contacts) => {
      //aca filtro la lista de contactos
      return contacts.name.toLowerCase().includes(screen.toLowerCase()); //aca especificamente con nombre, primero nomralizo en minuscula para que no haya equivocacion
      //verifico si el nombre cotiene  determinada letra
      //normalizo la palabra en minisucula para poder comparar
    });
  };

  const handleInputChange = (e) => {
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

  //IMAGEN
  const image = "src/assets/imgcontact.png";

  //FORMULA PARA MOSTRAR LIBRO ABIERTO
  const [showOpen, setShowOpen] = useState(false);
  // const [hideCover, setHideCover] = useState(false);
  const toggleSection = () => {
    setShowOpen(!showOpen);
    // setHideCover(!hideCover);
    console.log("show", showOpen);
    // console.log("hide", hideCover)
  };

  return (
    <>
      <section
        className="section-app"
        style={{ display: showOpen ? "none" : "block" }}
      >
        <div className="book-container">
          <img src={image} alt="" />
          <h1>Adress Book</h1>
          <button className="open-book" onClick={() => setShowOpen(true)}>
            Open
          </button>
        </div>
      </section>
      <div>
        <section
          className="section-open"
          style={{ display: showOpen ? "flex" : "none" }}
        >
          <div className="div-app-left"  style={{ display: showOpen ? "flex" : "none" }}></div>
          <div className="div-app-right"  style={{ display: showOpen ? "flex" : "none" }}>
            {" "}
            <button className="btn-add">Add new contact</button>
            <button className="btn-search">Find a contact</button>
            <button className="btn-contacts">Contact List</button>
            <button className="btn-close" onClick={() => setShowOpen(false)}>
              Close Adress Book
            </button>
          </div>
        </section>
      </div>
      <div>
        <Add
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
      </div>
    </>
  );
}

export default App;
