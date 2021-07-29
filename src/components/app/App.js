import 'components/button/button.css';
import Button from 'components/button/Button';
import ToDoItem from 'components/todo/ToDoItem';

function App() {

  const todos = [
    {id: 1, title: 'Wash dishes', completed: false},
    {id: 2, title: 'make dinner', completed: true},

  ]

  return (
    <div className="App">
      <header className="App-header">
       <Button label={'Click Me'}/>
      </header>
      {
        todos.map(td => {
          return(<ToDoItem key={td.id} toDo={td} />)
        })
      }
    </div>
  );
}

export default App;