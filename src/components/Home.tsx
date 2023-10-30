import React, {useState} from 'react';
import axios from 'axios';
import './Home.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export type Record = {
  pkId: number;
  countryName: string;
  isActive: boolean;
};

const Home: React.FC = () => {
  const [getId, setPkId] = useState<number | null>(null);
  const [updateName, setUpdatedName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    

    if (getId != null) {
      const token=localStorage.getItem("Token");
      axios
        .post('http://10.37.55.216:5000/api/v1/Country',{ countryName: updateName, pkId:getId },{
          headers: {
            "Authorization" : `Bearer ${token} `
        }
        })
        .then(response => {
          // console.log('Record Added:', response.data);
          console.log('Record Update:', response.data);
          
        })
       
    } else {
      const token=localStorage.getItem("Token");
      axios
        .post('http://10.37.55.216:5000/api/v1/Country',{ countryName: updateName},{
          headers: {
            "Authorization" : `Bearer ${token} `
        }
        })
        .then(response => {
          console.log('Record Add:', response.data);
          alert('Record Added')
        })
        
    }
  };

  
  return (
   <>
   <Navbar/>
   <Sidebar/>
   <h1>Home Page</h1>
   <h4 className='header'>Add/Update Country</h4>
    <div  className='form-container'>
    <form onSubmit={handleSubmit}>
      <label className='label'>
        CountryName:
        <input
          type="text"
          className='input-field '
          value={updateName}
          onChange={e => setUpdatedName(e.target.value)}
        />
      </label>
        
      <label className='label'>
        Id:
        <input 
        className='input-field '
          type="number"
          value={getId || ''}
          onChange={e => setPkId(parseInt(e.target.value) || null)}
        />
      </label>
      <div className='button-container'>
      <button type="submit" className='submit-button'>Submit</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default Home;
