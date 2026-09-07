import "./FilterChip.css"

const FilterChip = ({ checked, onChange }) => {
    return (
        <div className="filter-chip">
            <input type="checkbox" id="filterCheckbox" checked={checked} onChange={onChange}/>
            <label htmlFor="filterCheckbox">
                <span className="dot"></span>
                Только непрочитанные
            </label>
        </div>
    )
}

export default FilterChip