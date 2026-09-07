import { useState } from "react"
import ViewSwitch from "./components/ViewSwitch/ViewSwitch"
import ShelfScreen from "./pages/ShelfScreen/ShelfScreen"
import StatsScreen from "./pages/StatsScreen/StatsScreen"
import "./App.css"

function App() {
    const [currentScreen, setCurrentScreen] = useState('shelf')
    
    const [books, setBooks] = useState([
        { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
        { id: 2, title: 'Маленькая жизнь', author: 'Ханья Янагихара', read: false },
        { id: 3, title: 'Пиранези', author: 'Сюзанна Кларк', read: false },
    ])
    
    const [showOnlyUnread, setShowOnlyUnread] = useState(false)
    
    const [pagesToday, setPagesToday] = useState(0)

    let nextId = 4

    const handleAddBook = (title) => {
        setBooks(prev => [...prev, { id: nextId++, title, author: 'Автор не указан', read: false }])
    }

    const handleToggleRead = (id) => {
        setBooks(prev => 
            prev.map(book => 
                book.id === id ? { ...book, read: !book.read } : book
            )
        )
    }

    const handleDeleteBook = (id) => {
        setBooks(prev => prev.filter(book => book.id !== id))
    }

    const handleToggleShowOnlyUnread = () => {
        setShowOnlyUnread(prev => !prev)
    }

    const handlePagesIncrement = () => {
        setPagesToday(prev => prev + 1)
    }

    const handlePagesDecrement = () => {
        setPagesToday(prev => prev > 0 ? prev - 1 : 0)
    }

    const handlePagesReset = () => {
        setPagesToday(0)
    }

    return (
        <div className="app">
            <div className="app-header">
                <div className="brand">
                    <div className="brand-mark">S</div>
                    <div className="brand-name">Shelf</div>
                </div>
                <ViewSwitch currentScreen={currentScreen} onChange={setCurrentScreen}/>
            </div>

            {currentScreen === 'shelf' ? (
                <ShelfScreen 
                    books={books}
                    showOnlyUnread={showOnlyUnread}
                    onToggleShowOnlyUnread={handleToggleShowOnlyUnread}
                    onAddBook={handleAddBook}
                    onToggleRead={handleToggleRead}
                    onDeleteBook={handleDeleteBook}
                />
            ) : (
                <StatsScreen 
                    books={books}
                    pagesToday={pagesToday}
                    onPagesIncrement={handlePagesIncrement}
                    onPagesDecrement={handlePagesDecrement}
                    onPagesReset={handlePagesReset}
                />
            )}
        </div>
    )
}

export default App