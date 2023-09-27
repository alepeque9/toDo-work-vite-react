import Todo from './ToDo'

const ToDos = ({ToDo, deleteToDo, updateToDo}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-5">ToDo</h2>
            <ul className='list-group'>
                {
                    ToDo.map(ToDo => (
                        <Todo
                          key={ToDo.id}
                          ToDo={ToDo}
                          deleteToDo={deleteToDo}
                          updateToDo={updateToDo} />
                ))}
                {
                    ToDo.length === 0 && (
                        <li className='list-group-item text-center'>Sin ToDos</li>
                    )
                }
            </ul>
        </div>
    )
}

export default ToDos;