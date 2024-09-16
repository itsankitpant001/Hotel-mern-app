import React, { useState } from 'react'

function Addstaff() {
    let [name,setname]=useState('')
    let [work,setwork]=useState('')
    let [salray,setsalray]=useState('')
    let [email,setemail]=useState('')
    let [error,seterror]=useState('')
  
    const handelsubmit=async(e)=>{
      e.preventDefault();

      const user={name,work,salray,email};
      const response=await fetch("http://localhost:4000/",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
          "Content-type":"application/json"//speling mistakes 
        }
      })
      const result=await response.json()
      if(!response.ok){
        console.log(result.error)
        seterror(result.error)
      }
      if(response.ok){
        console.log(result)
        setname('')
        setwork('')
        setemail('')
        setsalray('')
        alert('Data saved')
      }


    }

    return (
        <>
        <div className='container'>
        {error && <div class="alert alert-danger">{error}</div>}
        <form onSubmit={handelsubmit}>
          

  <div className="mb-3">
    <label  className="form-label">
      Name
    </label>
    <input
    value={name}
    onChange={((e)=>(setname(e.target.value))
        
    )}
      type="text"
      className="form-control"
      
      aria-describedby="emailHelp"
    />
     <label  className="form-label">
     Work
    </label>
    <input
     value={work}
     onChange={((e)=>{
         setwork(e.target.value)
     })}
      type="text"
      className="form-control"
      aria-describedby="emailHelp"
    />
     <label  className="form-label">
      Salray
    </label>
    <input
     value={salray}
     onChange={((e)=>{
         setsalray(e.target.value)
     })}
      type="number"
      className="form-control"
      aria-describedby="emailHelp"
    />
     <label htmlFor="exampleInputEmail1" className="form-label">
      Email
    </label>
    <input
     value={email}
     onChange={((e)=>{
         setemail(e.target.value)
     })}
      type="email"
      className="form-control"
      aria-describedby="emailHelp"
    />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>

        </>
    )
}

export default Addstaff
