
import axios from 'axios';
import { useEffect, useState } from 'react';
// import './style.css'
import './Country.css'
// import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export type Record = {
    pkId: number,
    countryName: string,
    isActive: boolean
}


const Country = () => {
    const [records, setrecords] = useState<Record[]>([]);
    
    useEffect(() => {
        const fetchData =()=>{
            const token =  localStorage.getItem("Token");
            //  axios.get('http://10.37.55.216:5000/api/v1/Country/Search?Page=1&PageSize=30'
            axios.get('http://10.37.55.216:5000/api/v1/Country/Search?Page=5&PageSize=30'
            ,{
              headers:{
                "Authorization" : `Bearer ${token} `
              }
            }
          )
        
            .then((response) => {
                 console.log(response.data.data);
                setrecords(response.data.data);
            })
            .catch((error)=>{
                console.log(error)
            })
        };
       fetchData();
    }, []);

    const handleDelete = (pkId:number,countryName?:string)  =>{
        
        const token = localStorage.getItem("Token");
        const deleteUrl = `http://10.37.55.216:5000/api/v1/Country?id=${pkId}`
        axios
            .delete(deleteUrl,{
                headers :{
                    "Authorization" : `Bearer ${token} `
                }
            }
            )
            .then(() => { setrecords(records.filter((record) => pkId !== record.pkId))
                console.log(`Deleted record: ${countryName} (ID: ${pkId})`);
            })
           
            
        }
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div>
        <h1 className='head'>Country Page</h1>
        <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Id</th>
                        <th>Delete</th>
                    </tr >
                    </thead>
                    <tbody>
                    {records?.map((record => (
                                <tr key={record.pkId}>
                                    <td>{record.countryName}</td>
                                   <td>{record.pkId}</td>
                                   <td><button onClick={()=>handleDelete(record.pkId)}>Delete</button></td>
                                   
                                </tr> 
                           )) )
                        }
                        
                        </tbody>
                </table>
    </div>
    </>
  )
}

export default Country
