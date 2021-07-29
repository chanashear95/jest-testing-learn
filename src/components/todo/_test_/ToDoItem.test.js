import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import ToDoItem from "components/todo/ToDoItem";

afterEach(cleanup);

test('Should render NOT completed to do', () => {
    const toDo = {id: 1, title: 'Wash dishes', completed: false};
    render(<ToDoItem toDo={toDo}/>);
    const toDoEl = screen.getByTestId('todo-1');
    expect(toDoEl).toBeInTheDocument();
    expect(toDoEl).toHaveTextContent('Wash dishes');
    expect(toDoEl).not.toContainHTML('strike');

})

test('Should render completed to do', () => {
    const toDo = {id: 2, title: 'wash car', completed: true};
    render(<ToDoItem toDo={toDo}/>);
    const toDoEl = screen.getByTestId('todo-2');
    expect(toDoEl).toBeInTheDocument();
    expect(toDoEl).toHaveTextContent('wash car');
    expect(toDoEl).toContainHTML(`strike`);
}) 

test('matches snapshot', () => {
    const toDo = {id: 1, title: 'Wash dishes', completed: false}; 
    const tree = renderer.create(<ToDoItem toDo={toDo}/>).toJSON()
    expect(tree).toMatchSnapshot();
}) 