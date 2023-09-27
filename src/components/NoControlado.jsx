import { useRef, useState } from "react";

const NoControlado = () => {

    //Capturando los elementos del DOM
    const form = useRef(null);
    const [error, setError] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        //Capturar los datos//
        const data = new FormData(form.current);
        // console.log([...data.entries()]);
        // const dataObject = Object.fromEntries([...data.entries()]);
        // console.log(dataObject);
        const {title, descripcion, state} = Object.fromEntries([...data.entries()]);

        //Validar los datos//
        if(!title.trim() || !descripcion.trim() || !state.trim()) return setError('Llena todos los campos'); // .trim() -> formatea espacios vacios

        console.log(title, descripcion, state);

        //Enviar los datos//
    };

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              placeholder="Ingrese ToDo"
              className="form-control mb-2"
              name="title" />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="descripcion" />
            <select className="form-select mb-2" name="state">
                <option value='pendiente'>Pendiente</option>
                <option value='completado'>Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            { error !== '' ? error : '' }
        </form>
    );
};

export default NoControlado;