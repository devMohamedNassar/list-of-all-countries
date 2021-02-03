const Country = ({flag, name, info}) => (
    <div className="country">
        <img className="country__flag" src={flag} alt={name} />
        <div className="country__wrap">
            <h3 className="country__name">{name}</h3>
            <ul className="country-info">
                {/*
                    info.map((item, index) => (
                        <li className="country-info__item"></li>
                    ))*/
                }
            </ul>
        </div>
    </div>
);

const countries = props => (

);

export default countries;