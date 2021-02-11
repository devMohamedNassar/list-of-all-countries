import { useState, useContext } from 'react';

import countriesContext from '../context/countries-context';

const allFilters = [
    'All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
]

const Filter = props => {
    const [showFilterList, setShowFilterList] = useState(false);
    const context = useContext(countriesContext);
    const updateFilter = filterName => context.setFilter(filterName);
    const currentFilterName = context.currentFilterName;
    const onFilterItemClicked = name => {
        setShowFilterList(false);
        updateFilter(name);
    };
    return (
        <div className="filter">
            <div className="filter__header" onClick={setShowFilterList.bind(this, prevState => !prevState)}>
                <span className="filter__default-text">Filter by Region {currentFilterName && ':'} {currentFilterName}</span>
                <svg className={`filter__icon ${showFilterList ? 'rotate' : ''}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Chevron Down</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M112 184l144 144 144-144'/></svg>
            </div>
            <ul className={`filter__list ${showFilterList ? 'show' : ''}`}>
            {
                allFilters.map(
                    (item, index) => 
                    <li 
                        key={index} 
                        onClick={onFilterItemClicked.bind(this, item === 'All' ? '' : item)} 
                        className="filter__item">{item}</li>
                )
            }
            </ul>
        </div>
    );
};

export default Filter;