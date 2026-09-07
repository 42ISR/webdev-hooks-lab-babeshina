import BookForm from "../../components/BookForm/BookForm"
import FilterChip from "../../components/FilterChip/FilterChip"
import BookList from "../../components/BookList/BookList"
import "./ShelfScreen.css"

const ShelfScreen = ({ 
    books, 
    showOnlyUnread, 
    onToggleShowOnlyUnread,
    onAddBook,
    onToggleRead,
    onDeleteBook
}) => {
    const visibleBooks = showOnlyUnread 
        ? books.filter(book => !book.read)
        : books

    const count = books.length

    const pluralBooks = (n) => {
        const mod10 = n % 10
        const mod100 = n % 100
        if (mod10 === 1 && mod100 !== 11) return 'книга'
        if ([2,3,4].includes(mod10) && ![12,13,14].includes(mod100)) return 'книги'
        return 'книг'
    }

    return (
        <section className="screen active">
            <p className="greeting">Пиривет</p>
            <p className="greeting-sub">
                {count === 0 ? 'На полке пока пусто' : `На полке ${count} ${pluralBooks(count)}`}
            </p>

            <BookForm onAdd={onAddBook} />

            <div className="list-toolbar">
                <span className="toolbar-title">Книги</span>
                <FilterChip checked={showOnlyUnread} onChange={onToggleShowOnlyUnread}/>
            </div>

            <BookList books={visibleBooks} onToggleRead={onToggleRead} onDelete={onDeleteBook}/>
        </section>
    )
}

export default ShelfScreen