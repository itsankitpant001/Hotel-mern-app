import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Showmenu() {
    let[error,seterror]=useState('')
    let[menudata,setmenudata]=useState([])

    async function delete_click(id){
        const response=await fetch(`http://localhost:4000//menu/${id}`,{
            method:"DELETE"
        })
        const result= await response.json();
        if(!response.ok){
            console.log(result.error)
            seterror(result.error)
        }
        if(response.ok){
            seterror("Deleted Succesfully")
            setTimeout(() => {
                getmenu()
                seterror('')

                
            }, 1000);
        }

    }
   

    const getmenu=async ()=>{
        const response=await fetch("http://localhost:4000//menu")
        const result=await response.json();
        if(!response.ok){
            console.log(result.error)
            seterror(result.error);
        }
        if(response.ok){
            console.log(result)
            setmenudata(result)
        }
    }
    useEffect(()=>{
        getmenu()
    },[])
    return (
        <>
        <div className='container'>
            {error && <div class="alert alert-danger"> {error}</div>}
            <div className='text-center'><h1>All Data</h1></div>
        <div className='row'>
            {menudata.map((e,index)=>(<div key={index} className='col-3'>
            <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
    <h5 className="card-title">Name:- {e.name}</h5>
    <h5 className="card-title">Price:- {e.price}</h5>
    <h5 className="card-title">Ingredients:- {e.ingredients}</h5>
    <h5 className="card-title">Taste:- {e.taste}</h5> 
    <NavLink onClick={()=>delete_click(e._id)} className="card-link">
      Delete
    </NavLink>
    <NavLink to={`/updatemenu/${e._id}`} className="card-link">
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

export default Showmenu
