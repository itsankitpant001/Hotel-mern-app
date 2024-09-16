import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Showstaff() {
    let[workers,setworkers]=useState([]);
    let[error,seterror]=useState('') 
    async function delete_click(id){
        const response= await fetch(`http://localhost:4000/${id}`,{
            method:"DELETE"
        })
        const result= await response.json();
        if(!response.ok){
            console.log(result.error)
            seterror(result.error)
        }
        if(response.ok){
            console.log(result)
            seterror('Delete Successfully')
            setTimeout(() => {
                delete_click()
                seterror('')
                getdata()
            }, 1000 );
        }
    }
   
     async function getdata(){
        const response=await fetch("http://localhost:4000/")
        const result = await response.json();
        if(!response.ok){
            console.log(result.error);
            seterror(result.error)
        }
        if(response.ok){
            console.log(result);   
        }
        setworkers(result)   
    }
    useEffect(()=>{
        getdata()
    },[])
    return (
        
        <>
        <div className='container my-2'>
           
        {error && <div class="alert alert-danger">{error}</div>}
            <h2 className='text-center'>All Data</h2>
            <div className='row'>
            {workers?.map((e,index)=>(<div key={index} className="col-4">
            <div className="card" >
  <div className="card-body">
    <h3 className="card-title">name:- {e.name}</h3>
    <h4 className="card-title">salray:- {e.salray}</h4>
    <h5 className="">email:- {e.email}</h5>
    <h6 className="card-text">age:- {e.age}</h6>
    <a href="#" className="card-link" onClick={()=>(delete_click(e._id))}>
      Delete
    </a>
    <NavLink to={`/updatestaaff/${e._id}`} className="card-link">
      Update
    </NavLink>
  </div>
</div>
    </div>))}
            </div>
        </div>   
        </>
    )
}

export default Showstaff
