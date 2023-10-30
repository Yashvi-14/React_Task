import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './State.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Record  {
  value: number;
  name: string;
};

interface State  {

  pkId: number,
  stateName: string,
  countryPKId: number,
  countryName: string,
  isActive?: boolean
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const State = () => {
  const [countries, setCountries] = useState<Record[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Number | string>('');
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
const token = localStorage.getItem("Token");
    axios.get('http://10.37.55.216:5000/api/v1/Country/GetCountryList',{
      headers:{
        "Authorization" : `Bearer ${token} `
      }
    }
  )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
        const token =localStorage.getItem("Token");
        
        axios
        .get((`http://10.37.55.216:5000/api/v1/State/Search?countryId=${selectedCountry}`) ,{
        headers: {
          "Authorization" : `Bearer ${token} `
      }
      })
         //axios.get(`http://10.37.57.211:5105/api/v1/State/Search?countryId=${selectedCountry}`)
        .then((response) => {
          setStates(response.data.data);
          console.log(response.data.data);   
        })
        .catch((error) => {
          console.log(error);
        });
    // }
  }, [selectedCountry]);

  // useEffect(()=>{
  //       const state = states.filter(
  //       (e)=>e.countryName===selectedCountry
  //   );
  //   setStates(state);
  //   console.log(state);   
  // },[selectedCountry])

  
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value)
    setSelectedState('');
   
  };

  return (
    <>
    <Navbar/>
    <Sidebar/>
    < div  className='statediv'>
    <h1> State Page</h1>
      <select onChange={handleCountryChange}>
        <option  selected>
          Select a country
        </option>
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>

      <select placeholder="State"
           value={selectedState}
           onChange={(e) => setSelectedState(e.target.value)}
           disabled={!selectedCountry}>
        {states.map((state) => (
            <option key={state.pkId} value={state.stateName} >
            {state.stateName}
            </option>
        ))}
</select>

      
    </div>
    </>
  );
};

export default State;
