import { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

const Search = props => {
    const [inputVal, setInputVal] = useState('');
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if(!inputVal) return setCountries([]);
        const timer = setTimeout(() => {
            if(inputVal === inputRef.current.value){
                setIsLoading(true);
                fetch(`https://restcountries.eu/rest/v2/name/${inputVal}?fields=name;alpha2Code`)
                .then(response => {
                    if(response.ok) return response.json();
                    else {
                        return Promise.reject({status: response.status, statusText: response.statusText});
                    }
                })
                .then(data => {
                    setIsLoading(false);
                    const filterData = data.filter(item => item.alpha2Code.toLowerCase() !== 'il');
                    if(data.length === 1 && filterData.length === 0){
                        return Promise.reject({status: 404});
                    }
                    setCountries(filterData);
                })
                .catch(error => {
                    setIsLoading(false);
                    if(error.status === 404){
                        setCountries([{name: 'not found'}]);
                    } else {
                        setCountries([]);
                        alert('something went wrong!');
                    }
                });                
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [inputVal]);

    const inputChanged = e => {
        const value = e.target.value.trim();
        setInputVal(value);
    };
    return (
        <div className={`search-box ${isLoading ? 'search-box--loading' : ''}`}>
            <svg className="search-box__icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Search</title><path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'/></svg>
            <span className="search-box__spinner"></span>
            <input ref={inputRef} onChange={inputChanged} className="search-box__input" type="text" placeholder="Search for a country.." />
            <ul className={`search-result ${!isLoading && countries.length ? 'show' : ''}`}>
            {
                countries.map((country, index) => (
                    <li 
                        key={index} 
                        onClick={()=> country.name !== 'not found' && props.history.push('/' + country.alpha2Code)} 
                        className={`search-result__item ${country.name === 'not found' ? 'not-found' : ''}`}>
                        {country.name}
                    </li>
                ))
            }
            </ul>
        </div>        
    );
};

export default withRouter(Search);