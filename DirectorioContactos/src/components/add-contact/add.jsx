import React, { useState, useEffect } from "react";
import "./add.css";

const Add = (props) => {
  const { name, phone, email, notes, add, inputNa, inputP, inputE, inputNo } =
    props;

    useEffect
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => { //funcion para que cuando vuelvo a escrbir en los inputs se borre el mensaje de exito
    if (name || phone || email || notes) { //si alguno de estos inputs se escribe, no se muestra el emsnaje de exito
      setSuccessMessage(false);
    }
  }, [name, phone, email, notes]); //para que no se repita cada en cada renderizacion

  const handleSubmit = (e) => {
    e.preventDefault();
    add();

    setSuccessMessage(true);

    inputNa("");
    inputP("");
    inputE("");
    inputNo("");
  };

  return (
    <>
      <div>
        <section className="section-add">
          <div>
            <form className="form" action="" onSubmit={handleSubmit}>
              <label htmlFor="">Name</label>
              <input type="text" onChange={inputNa} value={name} />
              <label htmlFor="">Phone</label>
              <input type="number" onChange={inputP} value={phone} />
              <label htmlFor="">E-mail</label>
              <input type="email" onChange={inputE} value={email} />
              <label htmlFor="">Notes</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={inputNo}
                value={notes}
              ></textarea>
              <button type="submit" className="btn-add-c">
                Add Contact
              </button>
            </form>
            <div className="div-message">
              {successMessage && (
                <p className="succes-message">
                  Your contact has been added succesfully!
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { Add };
