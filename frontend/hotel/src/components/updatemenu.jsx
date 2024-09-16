import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Updatemenu() {
    let [name,setname]=useState('')
    let [price,setprice]=useState('')
    let [ingredients,setingredients]=useState('')
    let [taste,settaste]=useState('')
    let [error,seterror]=useState('')
    const {id}=useParams()
    const navigate=useNavigate();

    const handelsubmit=async(e)=>{
      e.preventDefault();

      const updatedmenu={name,price,ingredients,taste}
        const response= await fetch(`http://localhost:4000//menu/${id}`,{
            method:"PATCH",
            body:JSON.stringify(updatedmenu),
            headers:{"Content-Type":"application/json" 
            }
        })
        const result=await response.json();
        if(!response.ok){
            console.log(result.error)
            seterror(result.error)
        }
        if(response.ok){
            console.log("menu updated")
            navigate("/showmenu") 
        }
    } 
    const getmenu=async ()=>{
      const response= await fetch(`http://localhost:4000//menu/${id}`)
      const result= await response.json();
      if(!response.ok){
        console.log(result.error)
        seterror(result.error)
      }
        if(response.ok){
          console.log("menu",result)
          setname(result.name)
          setingredients(result.ingredients)
          settaste(result.taste)
          setprice(result.price)
        }
    }
    useEffect(()=>{
        getmenu()
    },[])
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
     Price
    </label>
    <input
     value={price}
     onChange={((e)=>{
         setprice(e.target.value)
     })}
      type="number"
      className="form-control"
      aria-describedby="emailHelp"
    />
     <label  className="form-label">
     Ingredients
    </label>
    <input
     value={ingredients}
     onChange={((e)=>{
         setingredients(e.target.value)
     })}
      type="text"
      className="form-control"
      aria-describedby="emailHelp"
    />
     <label htmlFor="exampleInputEmail1" className="form-label">
      Taste
    </label>
    <input
     value={taste}
     onChange={((e)=>{
         settaste(e.target.value)
     })}
      type="text"
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

export default Updatemenu
