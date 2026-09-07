import Checkbox from "../Checkbox/Checkbox"
import "./BookItem.css"

const COLORS = ['#7c5a3c', '#4f6b52', '#7a3b3b', '#3f5566', '#8a6b3f', '#5c4a72']

const BookItem = ({ book, onToggleRead, onDelete }) => {
    const colorIndex = book.id % COLORS.length
    const coverColor = COLORS[colorIndex]

    return (
        <div className="book-row">
            <div className="book-cover" style={{ backgroundColor: coverColor }}>
                {}
                {book.title.charAt(0).toUpperCase()}
            </div>
            <div className="book-info">
                <p className={`book-title ${book.read ? 'done' : ''}`}>
                    {book.title}
                </p>
                <div className="book-author">{book.author || 'Автор не указан'}</div>
            </div>
            <div className="read-check">
                <Checkbox checked={book.read} onChange={() => onToggleRead(book.id)}/>
                <span className="read-label">Прочитано</span>
            </div>
            <button className="delete-btn" onClick={() => onDelete(book.id)}>
                ✕
            </button>
        </div>
    )
}

export default BookItem