"use client";

import React, {useEffect, useState} from 'react';
import {Todo} from "@/app/components/todo/todo.model";
import axios from "axios";

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:8080/todos');
            setTodos(response.data);
        };
        fetchTodos();
    }, []);

    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;