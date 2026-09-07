import BookItem from "../BookItem/BookItem"
import "./BookList.css"

const BookList = ({ books, onToggleRead, onDelete }) => {
    if (books.length === 0) {
        return (
            <div className="empty-note">
                Книг подхоящих под этот фильтр нет
            </div>
        )
    }

    return (
        <div className="book-list">
            {}
            {books.map(book => (
                <BookItem key={book.id} book={book} onToggleRead={onToggleRead} onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default BookList