import { useContext } from 'react';

import { Link } from 'react-router-dom';
import CountriesContext from '../context/countries-context';
import Loading from './Loading';

const Country = ({flag, name, alpha2Code, alpha3Code, ...info}) => (
    
    <div className='country animate__animated animate__zoomIn'>
        <img className="country__flag" src={flag} alt={name} />
        <div className="country__wrap">
            <h3 className="country__name">
                <Link to= {`/${alpha2Code}`} className="country__link" >
                {name}
                </Link>
            </h3>
            <ul className="country__info">
                {
                    Object.keys(info).map((key, index) => (
                        <li key={index} className="country__item">
                            <span className="title">{key}:</span>
                            <span className="content">{info[key]}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
);

const Countries = props => {
    const context = useContext(CountriesContext)
    const countriesData = context.countries.filter(item => item.alpha2Code.toLowerCase() !== 'il');

    return (
        <Loading show={!countriesData.length}>
            <div className="countries">
            {
                countriesData.map((item, index) => <Country {...item} key={index} />) 
            }
            </div>                  
        </Loading>
    );
};

export default Countries;