import { Fragment, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Single from './components/Single';
import Footer from './components/Footer';
import CountriesContext from './context/countries-context';

const Home = () => (
  <Fragment>
    <div className="search-filter-wrap">
      <Search />
      <Filter />
    </div> 
    <Countries />     
  </Fragment>
);

function App() {
  
  const [countriesData, setCountriesData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const updateFilter = name => {
    setFilterName(name);
  };
  useEffect(() => {
      const url = 'https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha2Code;alpha3Code';
      const filterUrl = `https://restcountries.eu/rest/v2/region/${filterName}?fields=flag;name;population;region;capital;alpha2Code;alpha3Code`;
      fetch(filterName ? filterUrl : url)
      .then(response => {
          if(response.ok) return response.json();
          else return Promise.reject({status: response.status, textStatus: response.textStatus});
      })
      .then(data => setCountriesData(data))
      .catch(error => alert('failed to load the countries'))
  }, [filterName]);

  return (
    
    <div className="app">
      <Header />
      <CountriesContext.Provider value={
        {
          countries: countriesData, 
          setFilter: updateFilter,
          currentFilterName: filterName
        }
      }>
        <div className="container">
          
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/:id" component={Single} />
            </Switch>          
          
        </div>
      </CountriesContext.Provider>
      <Footer />
    </div>      
    
  );
}

export default App;
