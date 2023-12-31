import React from 'react';
import {Todo} from "@/app/components/todo/todo.model";


const getData = async (): Promise<Todo[]> => {
    const res = await fetch("http://localhost:8080/todos", {cache: "no-cache"});

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const ServerFetchingDataPage = async () => {
    const todos = await getData();

    if (!todos.length) {
        return <h2>No todos</h2>
    }

    return <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}: {todo.completed ? <b>Done</b> : <b>Pending</b>}</li>
        ))}
    </ul>;
};

export default ServerFetchingDataPage;