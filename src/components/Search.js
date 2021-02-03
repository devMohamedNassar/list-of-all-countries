const search = props => (
    <div className="search-box">
        <svg className="search-box__icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M338.29 338.29L448 448'/></svg>
        <span className="search-box__spinner"></span>
        <input className="search-box__input" type="text" placeholder="Search for a country.." />
    </div>
);

export default search;