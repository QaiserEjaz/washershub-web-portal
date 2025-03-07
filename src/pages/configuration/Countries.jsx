import React, { useState, useEffect } from 'react';
import CountryList from '../../components/CountryList';
import CityList from '../../components/CityList';
import AreaList from '../../components/AreaList';
import AddCountryForm from '../../components/AddCountryForm';
import AddCityForm from '../../components/AddCityForm';
import AddAreaForm from '../../components/AddAreaForm';
import NavBar from '../../components/layout/NavBar';

const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
};

const initialCountries = [
    {
        name: 'Pakistan',
        cities: [
            { name: 'Karachi', areas: ['Johar', 'D.H.A', 'Nazimabad', 'Korangi'] },
            { name: 'Lahore', areas: ['Gulberg', 'Model Town', 'Bahria Town', 'D.H.A'] },
            { name: 'Peshawar', areas: ['Hayatabad', 'University Town', 'Dabgari Gardens', 'D.H.A'] },
            { name: 'Islamabad', areas: ['F-7', 'G-6', 'Blue Area', 'D.H.A'] }
        ]
    },
    {
        name: 'United States',
        cities: [
            { name: 'New York', areas: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx'] },
            { name: 'Los Angeles', areas: ['Hollywood', 'Venice', 'Downtown', 'Beverly Hills'] },
            { name: 'Chicago', areas: ['Lincoln Park', 'Hyde Park', 'Loop', 'Gold Coast'] },
            { name: 'Houston', areas: ['Downtown', 'Midtown', 'Uptown', 'Montrose'] }
        ]
    },
    {
        name: 'Canada',
        cities: [
            { name: 'Toronto', areas: ['Downtown', 'Scarborough', 'North York', 'Etobicoke'] },
            { name: 'Vancouver', areas: ['Richmond', 'Burnaby', 'Kitsilano', 'Downtown'] },
            { name: 'Montreal', areas: ['Old Montreal', 'Plateau', 'Downtown', 'West Island'] },
            { name: 'Calgary', areas: ['Downtown', 'Beltline', 'Bridgeland', 'Inglewood'] }
        ]
    },
    {
        name: 'United Kingdom',
        cities: [
            { name: 'London', areas: ['Chelsea', 'Camden', 'Westminster', 'Greenwich'] },
            { name: 'Manchester', areas: ['Didsbury', 'Salford', 'Northern Quarter', 'Chorlton'] },
            { name: 'Birmingham', areas: ['Jewellery Quarter', 'Edgbaston', 'Moseley', 'Selly Oak'] },
            { name: 'Edinburgh', areas: ['Leith', 'New Town', 'Old Town', 'Stockbridge'] }
        ]
    },
    {
        name: 'Australia',
        cities: [
            { name: 'Sydney', areas: ['Bondi', 'Manly', 'CBD', 'Surry Hills'] },
            { name: 'Melbourne', areas: ['CBD', 'St Kilda', 'Fitzroy', 'South Yarra'] },
            { name: 'Brisbane', areas: ['South Bank', 'Fortitude Valley', 'West End', 'New Farm'] },
            { name: 'Perth', areas: ['Fremantle', 'Subiaco', 'Cottesloe', 'Northbridge'] }
        ]
    }
];


const Countries = () => {
    const [countries, setCountries] = useState(initialCountries);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setSelectedCity(null);
        setErrorMessage('');
    };

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setErrorMessage('');
    };

    const handleAddCountry = (newCountry) => {
        const formattedCountryName = capitalizeFirstLetter(newCountry.name);
        if (countries.some(country => country.name.toLowerCase() === formattedCountryName.toLowerCase())) {
            setErrorMessage('Country already exists.');
            return;
        }
        setCountries([...countries, { ...newCountry, name: formattedCountryName }]);
        setErrorMessage('');
    };

    const handleAddCity = (countryName, newCity) => {
        const formattedCityName = capitalizeFirstLetter(newCity);
        const updatedCountries = countries.map(country => {
            if (country.name === countryName) {
                if (country.cities.some(city => city.name.toLowerCase() === formattedCityName.toLowerCase())) {
                    setErrorMessage('City already exists in this country.');
                    return country;
                }
                return { ...country, cities: [...country.cities, { name: formattedCityName, areas: [] }] };
            }
            return country;
        });
        setCountries(updatedCountries);
        setErrorMessage('');
    };

    const handleAddArea = (cityName, newArea) => {
        const formattedAreaName = capitalizeFirstLetter(newArea);
        const updatedCountries = countries.map(country => {
            if (country.name === selectedCountry.name) {
                const updatedCities = country.cities.map(city => {
                    if (city.name === cityName) {
                        if (city.areas.some(area => area.toLowerCase() === formattedAreaName.toLowerCase())) {
                            setErrorMessage('Area already exists in this city.');
                            return city;
                        }
                        return { ...city, areas: [...city.areas, formattedAreaName] };
                    }
                    return city;
                });
                return { ...country, cities: updatedCities };
            }
            return country;
        });
        setCountries(updatedCountries);
        setErrorMessage('');
    };

    const handleRemoveCity = (countryName, cityToRemove) => {
        if (window.confirm(`Are you sure you want to remove ${cityToRemove}?`)) {
            const updatedCountries = countries.map(country => {
                if (country.name === countryName) {
                    return {
                        ...country,
                        cities: country.cities.filter(city => city.name !== cityToRemove)
                    };
                }
                return country;
            });
            setCountries(updatedCountries);
            setSelectedCity(null);
        }
    };

    const handleRemoveArea = (cityName, areaToRemove) => {
        if (window.confirm(`Are you sure you want to remove ${areaToRemove}?`)) {
            const updatedCountries = countries.map(country => {
                if (country.name === selectedCountry.name) {
                    const updatedCities = country.cities.map(city => {
                        if (city.name === cityName) {
                            return {
                                ...city,
                                areas: city.areas.filter(area => area !== areaToRemove)
                            };
                        }
                        return city;
                    });
                    return { ...country, cities: updatedCities };
                }
                return country;
            });
            setCountries(updatedCountries);
        }
    };

    const handleRemoveCountry = (countryToRemove) => {
        if (window.confirm(`Are you sure you want to remove ${countryToRemove}?`)) {
            const updatedCountries = countries.filter(country => country.name !== countryToRemove);
            setCountries(updatedCountries);
            if (selectedCountry && selectedCountry.name === countryToRemove) {
                setSelectedCountry(null);
                setSelectedCity(null);
            }
        }
    };

    useEffect(() => {
        if (selectedCountry) {
            const updatedCountry = countries.find(country => country.name === selectedCountry.name);
            setSelectedCountry(updatedCountry || null);
            if (selectedCity && updatedCountry) {
                const updatedCity = updatedCountry.cities.find(city => city.name === selectedCity.name);
                setSelectedCity(updatedCity || null);
            }
        }
    }, [countries, selectedCity, selectedCountry]);

    return (
        <div>
            <NavBar />
            <div className="row p-4 container-fluid">
                <div className="col-lg-4 mb-3">
                    <h4>Countries</h4>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <CountryList
                        countries={countries}
                        onSelectCountry={handleSelectCountry}
                        onRemoveCountry={handleRemoveCountry}
                    />
                    <AddCountryForm onAddCountry={handleAddCountry} />
                </div>
                <div className="col-lg-4 mb-3">
                    <h4>Cities in {selectedCountry ? selectedCountry.name : 'Selected Country'}</h4>
                    {selectedCountry && (
                        <>
                            <CityList
                                countryName={selectedCountry.name}
                                cities={selectedCountry.cities}
                                onRemoveCity={handleRemoveCity}
                                onSelectCity={handleSelectCity}
                            />
                            <AddCityForm
                                countryName={selectedCountry.name}
                                onAddCity={handleAddCity}
                            />
                        </>
                    )}
                </div>
                <div className="col-lg-4 mb-3">
                    <h4>Areas in {selectedCity ? selectedCity.name : 'Selected City'}</h4>
                    {selectedCity && (
                        <>
                            <AreaList
                                cityName={selectedCity.name}
                                areas={selectedCity.areas}
                                onRemoveArea={handleRemoveArea}
                            />
                            <AddAreaForm
                                cityName={selectedCity.name}
                                onAddArea={handleAddArea}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Countries;
