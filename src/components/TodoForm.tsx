import React, {useState} from 'react'
import { ItemsProps } from "../interfaces/Items"


interface defaultFormType{
    id?: number,
    name: string
}

interface TodoFormProps {
    items: ItemsProps["items"];
    setItems: React.Dispatch<React.SetStateAction<ItemsProps["items"]>>
}

const defaultFormData: defaultFormType = {
    name: ""
}

const TodoForm: React.FC<TodoFormProps> = ({items, setItems}) => {
    
    
    const setAndSaveItems = (newItems: ItemsProps["items"]) => {
        setItems(newItems);
        localStorage.setItem('Items', JSON.stringify(newItems));
    }

    const [formData, setFormData] = useState<defaultFormType>(defaultFormData)

    const {name} = formData

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
        if (!name) {
            return
        }
        console.log(formData);
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const data = {name, id, checked: false}
        const newItems = [...items, data];
        setAndSaveItems(newItems);
        setFormData(defaultFormData);
    }
  return (
    <>
        <div className="row">
            <div className="col-12 mt-2">
                <h3>To-do Application</h3>
            </div>
        </div>
            
        <div className="row mt-2">
            <div className="col-md-7">
                <form action="" className="row form d-flex justify-content-center align-items-center" onSubmit={onSubmit}>
                    <div className="form-group col-12">
                        <input
                            type="text"
                            id="name"
                            placeholder="task"
                            value={name}
                            className="form-control"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                    <div className='mt-2 text-center'>
                        <button className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default TodoForm