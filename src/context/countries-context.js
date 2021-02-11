import React from 'react';

const countriesContext = React.createContext({
    countries: [],
    setFilter: () => {},
    currentFilterName: ''
});

export default countriesContext;

