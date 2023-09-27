// import Cat from "./components/Cat";
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ToDos from "./components/ToDos";

//si hay algo en el local storage del toDo se va a utilizar
const initStateoDo = JSON.parse(localStorage.getItem('toDo')) || [];

const App = () => {
  const [toDo, setTodo] = useState(initStateoDo);

  useEffect(() => {
    //el local storage solo guarda strings, por esta razon pasamos el array a un JSON,
    //para que despues podamos transformarlo en un array otra vez
    localStorage.setItem('toDo', JSON.stringify(toDo))
  }, [toDo]); //se va a ejecutar cada vez que cambien los toDo


  const addToDo = newToDo => {
    setTodo([...toDo, newToDo]);
  };

  const deleteToDo = id => {
    const newArray = toDo.filter(ToDo => ToDo.id !== id);
    setTodo(newArray);
  };

  const updateToDo = id => {
    const newArray = toDo.map(toDo => {
      if(toDo.id === id){
        toDo.state = !toDo.state;
      }
      return toDo
    });
    setTodo(newArray);
  };

  const orderToDo = arrayToDo => {
    return arrayToDo.sort((a, b) => {
      if(a.priority === b.priority) return 0; //nada
      if(a.priority) return -1; //mayor prioridad
      if(!a.priority) return 1; //menor prioridad
    });
  }

  return (
    <div className="container mb-2">
      <h1 className="my-5">Tareas</h1>
      <Formulario
        addToDo={addToDo}></Formulario>
      <ToDos
        ToDo={orderToDo(toDo)}
        deleteToDo={deleteToDo}
        updateToDo={updateToDo}></ToDos>
    </div>
  );
};

export default App;
