import { useState } from "react"  
import Input from "../Input/Input"
import Button from "../Button/Button"
import "./BookForm.css"

const BookForm = ({ onAdd }) => {
    const [title, setTitle] = useState("")

    const handleSubmit = () => {
        const trimmed = title.trim()
        if (trimmed) {
            onAdd(trimmed)
            setTitle("")
        }
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className="add-book-row">
            <Input className="book-form__input" placeholder="Название книги" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}/>
            <Button onClick={handleSubmit}>Добавить книгу на полку</Button>
        </div>
    )
}

export default BookForm