import React, { useState, useEffect } from 'react';

const CountryDropdown = () => {
  // States to hold the data, loading status, and errors
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Define the API connection configuration
    const url = 'https://rapidapi.com';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2813019bf7msh77951c0714fbaa9p161401jsn298612bf5249', //  Replace with your actual key
        'x-rapidapi-host': '://rapidapi.com'
      }
    };

    // Fetch the data from the RapidAPI server
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data); // Save the array of countries to state
        setLoading(false);  // Turn off loading screen
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs exactly once when component mounts

  // Handle dropdown selection changes
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="country-select" style={{ display: 'block', marginBottom: '8px' }}>
        Select a Country:
      </label>
      
      <select 
        id="country-select" 
        value={selectedCountry} 
        onChange={handleChange}
        style={{ padding: '8px', fontSize: '16px', borderRadius: '4px' }}
      >
        <option value="">-- Choose a country --</option>
        {countries.map((item, index) => (
          // Use alpha2Code (like "IN" or "US") as value, show full country name to user
          <option key={index} value={item.alpha2Code}>
            {item.country} ({item.alpha2Code})
          </option>
        ))}
      </select>

      {selectedCountry && (
        <p style={{ marginTop: '15px' }}>
          You selected country code: <strong>{selectedCountry}</strong>
        </p>
      )}
    </div>
  );
};

export default CountryDropdown;
