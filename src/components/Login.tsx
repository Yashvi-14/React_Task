import axios from 'axios'
import React, { useState } from 'react'
import { useAuth } from './AuthContext';


const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleSubmit =  (e: React.FormEvent) => {
   
    e.preventDefault();



    login(username, pass);
    // try {
       
    // } catch (error) {
    //   // Handle login error (e.g., show an error message to the user)
    //   console.error('Login error:', error);
    // }
  };
  
  
  return (
    <div>
      <section className="vh-100" style={{marginTop:"100px"}}>
        <form>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{borderRadius: "2rem "}}>
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg"  style={{border:"1px solid black"}} value= {username} onChange={(e)=>setUsername(e.target.value)}/>
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" style={{border:"1px solid black"}}value= {pass} onChange={(e)=>setPass(e.target.value)} />
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                </div>

                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>

                
        {/* ... your form fields (username and password) ... */}
        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>
          Login
        </button>
              </div>
            </div>
          </div>
        </div>
        </form>
     
    </section>
    </div>
    
   
    
  )

  }
export default Login
