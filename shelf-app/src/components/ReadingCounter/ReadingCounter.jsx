import "./ReadingCounter.css"

const ReadingCounter = ({ value, onIncrement, onDecrement, onReset }) => {
    return (
        <div className="session-card">
            <p className="session-title">Страниц прочитано сегодня</p>
            <p className="session-sub">Обновляйте счетчик после каждой вашей сессии</p>
            <div className="counter-row">
                <button className="counter-btn" onClick={onDecrement} disabled={value === 0}>
                    −
                </button>
                <span className="counter-value">{value}</span>
                <button className="counter-btn" onClick={onIncrement}>
                    +
                </button>
            </div>
            <button className="btn ghost counter-reset" onClick={onReset}>
                Сбросить счётчик
            </button>
        </div>
    )
}

export default ReadingCounter