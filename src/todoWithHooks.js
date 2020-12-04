import React, { useState } from 'react';
import { CardContent, Typography, Card, Button, TextField, Grid, CardActions} from '@material-ui/core';
import * as uuid from 'uuid'; 


const Todo = ({todo,deleteTodo}) => {

    const handleDelete = () => {
        deleteTodo(todo.id);
    }
    return(
        <Card className="list">
            <CardContent>
                <Typography variant="h5">{todo.title}</Typography>
                <Typography variant="body2" component="p">{todo.text}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" onClick={handleDelete}>remove</Button>
            </CardActions>
        </Card>
    )
}

const TodoList = ({todos,deleteTodo}) => {
    return(<div>
            {todos.map((todo, index) => (
                <Todo todo={todo} index={index} key={index} deleteTodo={deleteTodo} ></Todo> 
            ))}
    </div>)
}

const AddInput = ({addTodo}) => {

    const [input,setInput] = useState({title: '', value: ''});

    const handleSubmit = e => {
        console.log(input.title,input.value);
        e.preventDefault();
        if(input.value==='' && input.title==='') return;
        addTodo(input);
        setInput({title: '', value: ''});
    }


    const handleInput = e => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    return(<form onSubmit={handleSubmit}>
    <h2>Add Todos:</h2>
    <Grid container direction={"column"} spacing={2}>
    <Grid item>
    <TextField variant="outlined" label="Title" type="text" name="title" className="inputfield" value={input.title} onChange={handleInput}></TextField>
    </Grid>
    <Grid item>
    <TextField variant="outlined" label="Text" type="text" name="value" className="inputfield" value={input.value} onChange={handleInput}></TextField>
    </Grid>
    <Grid item>
    <Button variant="contained" type="submit">ADD</Button>
    </Grid>
    </Grid> 
    </form>)
}

const TodoApp = () => {
    let todoList = [
       {id: uuid.v4(),
        text: 'todo 1 is ddas',
        title: 'Todo1'},
        {id: uuid.v4(),
        text: 'todo 2 is ddas',
        title: 'Todo2'},
        {id: uuid.v4(),
        text: 'todo 3 is ddas',
        title: 'Todo3'}
    ]
    const [todos,setTodos] = useState(todoList);
    
    const addTodo = (input) => {
        var obj = {id: uuid.v4(),text: input.value,title: input.title};
        setTodos([...todos,obj])
        console.log(todos);
    }

    const deleteTodo = (id) => {
        let newtodos = todos.filter(item => item.id !== id);
        console.log(newtodos);
        setTodos(newtodos);
    }

    return(<div className="mrg">
    <AddInput addTodo={addTodo}></AddInput>
    <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>)


}
export default TodoApp;
