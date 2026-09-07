import StatsSummary from "../../components/StatsSummary/StatsSummary"
import ReadingCounter from "../../components/ReadingCounter/ReadingCounter"
import "./StatsScreen.css"

const StatsScreen = ({ 
    books, 
    pagesToday, 
    onPagesIncrement, 
    onPagesDecrement, 
    onPagesReset 
}) => {
    return (
        <section className="screen active">
            <p className="greeting">Статистика</p>
            <p className="greeting-sub">Как продвигается чтение</p>

            <StatsSummary books={books} />
            <ReadingCounter value={pagesToday} onIncrement={onPagesIncrement} onDecrement={onPagesDecrement} onReset={onPagesReset}/>
        </section>
    )
}

export default StatsScreen