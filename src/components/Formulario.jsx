import { useState } from "react";
import Swal from 'sweetalert2'
// setToDo({...toDo, priority: e.target.checked})
const Formulario = ({addToDo}) => {

    const [toDo, setToDo] = useState({
        title: '',
        descripcion: '',
        state: 'pendiente',
        priority: false,
    });

    const [error, setError] = useState(false);

    const {title, descripcion, state, priority} = toDo;

    //Capturando los elementos del DOM
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validaciones
        if (!title.trim() || !descripcion.trim()) {
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Titulo y descripción obligatorios',
          });
        } else {
          setError(false);
        }
        addToDo({
          id: Date.now(),
          ...toDo,
          // state: state === 'completado' ? true : false
          state: state === 'completado' ? true : false
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agrego correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(title, descripcion, state, priority)
    };

    //Cambios en los elementos del DOM
    const handleChange = e => {
        const {name, type, checked, value} = e.target
        setToDo({
            ...toDo,
            [name]:
                type === 'checkbox'
                    ? checked
                    : value,
        });
    };

    const PintarError = () => (
      <div className="alert alert-danger">Todos los campos obligatorios</div>
    );

    return (
        <div className="container mt-2">
          <h2>Cargar tarea</h2>
          {error && <PintarError />}
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ingrese ToDo"
                className="form-control mb-2"
                name="title"
                value={title} onChange={handleChange}/>
              <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="descripcion"
                value={descripcion} onChange={handleChange}/>
              <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}/>
                  <label htmlFor="inputCheck">Dar prioridad</label>
              </div>
              <select
                className="form-select mb-2"
                name="state"
                value={state}
                onChange={handleChange}>
                  <option value='pendiente'>Pendiente</option>
                  <option value='completado'>Completado</option>
              </select>
              <button
                type="submit"
                className="btn btn-primary">Agregar tarea
              </button>
          </form>
        </div>
    );
};

export default Formulario;