import "./StatsSummary.css"

const StatsSummary = ({ books }) => {
    const total = books.length
    const unread = books.filter(book => !book.read).length
    const read = total - unread

    return (
        <div className="stats-row">
            <div className="stat-card">
                <div className="stat-value">{total}</div>
                <div className="stat-label">На полке</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">{unread}</div>
                <div className="stat-label">Непрочитано</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">{read}</div>
                <div className="stat-label">Прочитано</div>
            </div>
        </div>
    )
}

export default StatsSummary