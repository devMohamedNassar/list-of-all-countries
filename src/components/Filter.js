const filter = props => (
    <div className="filter">
        <div className="filter__header">
            <span className="filter__default-text">Filter by Region</span>
            <svg className="filter__icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Chevron Down</title><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144'/></svg>
        </div>
        <ul className="filter__list">
            <li className="filter__item">Africa</li>
            <li className="filter__item">America</li>
            <li className="filter__item">Asia</li>
            <li className="filter__item">Europe</li>
            <li className="filter__item">Oceania</li>
        </ul>
    </div>
);

export default filter;