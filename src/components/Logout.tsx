import React from 'react'

const Logout = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    localStorage.removeItem("Token")
    window.location.href = "/"; 
  return (
   <>
   <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit} >Logout</button>
   </>
  )
}

export default Logout
