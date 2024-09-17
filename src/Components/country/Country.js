import React from 'react';

const Country = (props) => {
    // *for catch data ==   props
    console.log(props)
    const {name, population, region, flags} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            <h4>This Country is: {name.common}</h4>
            <img style={{height:'80px'}} src={flags.svg} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region} </small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;