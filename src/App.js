import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

// import Container from './components/Container';
// import Header from './components/Header';

// pengaplikasian styled component
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.input`
  border: 5px solid #000;
`;

const Button = styled.button`
  display: inline-block;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  height: 30px;
  margin-left: 10px;
`;


function App() {
  // setter getter
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: 'default task',
      complete: false
    }
  ]);
  const [completedTask, setCompletedTask] = useState(0);

  // function
  const handleClick = () => {
    // console.log('click')
    console.log(input);
    // {
    //   id,
    //   task,
    //   complete
    // }
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false
      }
    ]);
    // clear input
    setInput('');

    // console.log(todoList)
  }

  const handleCompleteTask = (id) => {
    const list = todoList.map((task) => {
      
      let item = {};
      // find id
      if (task.id === id) {
        if (task.complete === false) {
          setCompletedTask(completedTask + 1);
        }
        else {
          setCompletedTask(completedTask - 1);
        }

        item = {
          ...task,
          complete: !task.complete
        }
      }
      else {
        item = { ...task }
      }

      // item
      return item;
    })

    setTodoList(list);
  }


  return (
    <Container>
      <div>
        <h2>Todo List Web</h2>
        <Text value={input} onInput={(e) => setInput(e.target.value)} />
        <Button
          onClick={() => handleClick()}
        >Tambah</Button>

        {/* pending task, complete task */}
        <div>
          <b>Pending Task:</b> {todoList.length - completedTask}
          &nbsp;&nbsp;&nbsp;
          <b>Completed Task:</b> {completedTask}
        </div>

        {/* task list item */}
        <div>
          <ul>
            {
              todoList.map((todo) => {
                return (
                  <li
                    key = {todo.id}
                    id = {todo.id}
                    onClick={() => handleCompleteTask(todo.id)}
                    style={{
                      textDecoration: todo.complete && 'line-through'
                    }}
                  >
                    {todo.task}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default App;
