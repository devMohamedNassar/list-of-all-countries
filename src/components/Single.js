import { Fragment, useEffect, useState, useContext } from 'react';

import Loading from './Loading';
import countriesContext from '../context/countries-context';

const addSpaceBetweenWords = str => {
    const arr = [];
    let lastCapitalIndex = 0;
    for(let i = 0; i < str.length; i++){
        if(i !== 0 && str[i] === str[i].toUpperCase()){
            arr.push(str.slice(lastCapitalIndex, i));
            lastCapitalIndex = i;
        }
        if(i === str.length - 1) arr.push(str.slice(lastCapitalIndex));
    }
    return arr.join(' ');
};
const infoList = ['nativeName', 'population', 'region', 'subregion', 'capital', 'topLevelDomain', 'currencies', 'languages'];
const getInfoFromArr = infoArr => infoArr.map(item => item.name || item).filter(item => typeof item === 'string').join(', ');

const Single = props => {
    const [countryData, setCountryData] = useState({});
    const {flag, name, borders, ...info} = countryData;
    const countriesData = useContext(countriesContext).countries;
    const CodeToName = countriesData.length && countriesData.reduce(
        (prev, item) => {
            prev[item.alpha2Code] = item.name;
            if (item.alpha2Code !== item.alpha3Code) prev[item.alpha3Code] = item.name;
            return prev;
        }, {}
    );

    useEffect(() => {
        const fields = '?fields=flag;name;population;region;capital;nativeName;subregion;topLevelDomain;borders;currencies;languages'
        fetch(`https://restcountries.eu/rest/v2/alpha/${props.match.params.id}${fields}`)
        .then(response => {
            const currentId = props.match.params.id.toLowerCase();
            if(currentId === 'il' || currentId === 'isr'){
                return new Promise.reject();
            }
            if(response.ok) return response.json();
            else return new Promise.reject({status: response.status, textStatus: response.textStatus});
        })
        .then(data => setCountryData(data))
        .catch(error => {
            props.history.push('/');
        })
    }, [props.match.params.id, props.history]);
    const pageContent = Object.keys(countryData).length && (
       <Fragment>
            <button onClick={() => props.history.push('/')} className="single__back-btn">
                <svg className='single__back-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><title>Arrow Back</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M244 400L100 256l144-144M120 256h292'/></svg>
                Back
            </button>
            <div className="single__wrap">
                <img className="single__flag" src={flag} alt={name} />
                <div className="single__details">
                    <h1 className="single__name">{name}</h1>
                    <div className="single__info-wrap">
                        <ul className="single__info">
                            {
                                infoList.slice(0,5).map((key, index) => (
                                    <li key={index} className="single__info-item">
                                        <span className="single__info-title">
                                            {addSpaceBetweenWords(key)}:
                                        </span>
                                        <span className="single__info-content">
                                        {
                                            Array.isArray(info[key]) ? 
                                            getInfoFromArr(info[key]) : 
                                            info[key]
                                        }
                                        </span>
                                    </li>                            
                                ))
                            }
                        </ul>
                        <ul className="single__info">
                            {
                                infoList.slice(5).map((key, index) => (
                                    <li key={index} className="single__info-item">
                                        <span className="single__info-title">
                                            {addSpaceBetweenWords(key)}:
                                        </span>
                                        <span className="single__info-content">
                                        {
                                            Array.isArray(info[key]) ? 
                                            getInfoFromArr(info[key]) : 
                                            info[key]
                                        }
                                        </span>
                                    </li>                            
                                ))
                            }
                        </ul>                        
                    </div>

                    {
                        borders.length ?
                        <div className="single__border">
                            <h3 className="single__border-title">border countries:</h3>
                            <ul className="single__border-list">
                            {
                                borders.filter(item => item !== 'ISR').map((countryCode, index) => (
                                <li 
                                    key={index} 
                                    onClick={() => props.history.push('/' + countryCode)} 
                                    className="single__border-item">
                                    {CodeToName[countryCode]}
                                </li>
                                ))
                            }
                            </ul>
                        </div> 
                        : null                       
                    }

                </div>
            </div>
       </Fragment> 
    );

    return (
        <Loading show={!Object.keys(countryData).length}>
            <section className="single animate__animated animate__fadeIn">
                <div className="container">
                {
                    pageContent
                }
                </div>
            </section>  
        </Loading>
    )
};

export default Single;