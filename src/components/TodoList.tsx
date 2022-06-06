import React from 'react'
import { ItemsProps } from '../interfaces/Items'
import TodoItem from "./TodoItem"

interface TodoListProps{
    items: ItemsProps["items"];
    setItems: React.Dispatch<React.SetStateAction<ItemsProps["items"]>>
}

const TodoList: React.FC<TodoListProps> = ({ items, setItems }) => {
    
    
    const setAndSaveItems = (newItems: ItemsProps["items"]) => {
        setItems(newItems);
        localStorage.setItem('Items', JSON.stringify(newItems));
    }

    const handleDelete = (id: number) => {
        const listItems = items.filter((item) => item.id !== id);
        setAndSaveItems(listItems);
    }

    const handleCheck = (id: number) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setAndSaveItems(listItems);
    }

    const renderList = (): JSX.Element[] => {
        return items.map(item => {
                return (
                    <TodoItem key={item.id} item={item}
                        handleDelete={handleDelete}
                        handleCheck={handleCheck}
                    />
                )
            }
        )
    }


    return (
        <div className="row">
            <div className="col-12 mt-2 mb-2">
                {
                    items.length ? renderList() : (
                        <p style={{ color: "red" }}>List is empty</p>
                    )
                }
            </div>
        </div>    
    )
}

export default TodoList