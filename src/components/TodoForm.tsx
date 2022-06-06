import React, {useState} from 'react'
import { ItemsProps } from "../interfaces/Items"


interface defaultFormType{
    id?: number,
    task: string
}

interface TodoFormProps {
    items: ItemsProps["items"];
    setItems: React.Dispatch<React.SetStateAction<ItemsProps["items"]>>
}

const defaultFormData: defaultFormType = {
    task: ""
}

const TodoForm: React.FC<TodoFormProps> = ({items, setItems}) => {
    
    
    const setAndSaveItems = (newItems: ItemsProps["items"]) => {
        setItems(newItems);
        localStorage.setItem('Items', JSON.stringify(newItems));
    }

    const [formData, setFormData] = useState<defaultFormType>(defaultFormData)

    const {task} = formData

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        setFormData((prevState) => (
            {
                ...prevState,
                [e.target.id]: e.target.value
            }
        ))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!task) {
            return
        }
        console.log(formData);
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const data = {task, id, checked: false}
        const newItems = [...items, data];
        setAndSaveItems(newItems);
        setFormData(defaultFormData);
    }
  return (           
    <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-7 my-2">
            <form action="" className="row" onSubmit={onSubmit}>
                <div className="form-group col-12 set-text">
                    <label htmlFor="task" className="form-label h5">Enter A Chore</label>
                    <input
                        type="text"
                        id="task"
                        placeholder="task"
                        value={task}
                        className="form-control search-bar"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className='mt-2 text-center'>
                    <button className="btn btn-danger form-button">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TodoForm