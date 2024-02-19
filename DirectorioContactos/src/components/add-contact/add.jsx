import React from "react";
import './add.css'

const Add = () => {
  return (
    <>
      <section>
        <div>
        <form className="form" action="">
          <label htmlFor="">Nombre</label>
          <input type="text" />
          <label htmlFor="">Teléfono</label>
          <input type="number" />
          <label htmlFor="">E-mail</label>
          <input type="email" />
          <label htmlFor="">Notas</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Agregar contacto</button>
        </form>
        </div>
      </section> 
    </>
  );
};

export { Add };
