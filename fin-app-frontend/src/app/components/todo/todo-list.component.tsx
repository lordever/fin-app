"use client";

import React, {useEffect, useState} from 'react';
import {Todo} from "@/app/components/todo/todo.model";
import axios, {Axios, AxiosResponse} from "axios";
import {CircularProgress} from "@mui/material";

const TodoList = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            const {data}: AxiosResponse<Todo[]> = await axios.get('/request-handlers/todos');
            setLoading(false);
            setTodos(data);
        };
        fetchTodos();
    }, []);

    if (loading) {
        return <CircularProgress/>
    }

    return (
        <>
            <h2>Todo List</h2>
            {!todos.length ? <h3>No todo items</h3> : (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                        </li>
                    ))}
                </ul>
            )}

        </>
    );
};

export default TodoList;