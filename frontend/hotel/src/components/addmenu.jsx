import React, { useState } from 'react'

function Addmenu() {
    let [name,setname]=useState('')
    let [price,setprice]=useState('')
    let [ingredients,setingredients]=useState('')
    let [taste,settaste]=useState('')
    let [error,seterror]=useState('')

    const handelsubmit= async(e)=>{
        e.preventDefault()
     
        const menu={name,price,ingredients,taste};
        const response=await fetch("http://localhost:4000//menu",{
            method:"POST",
            body:JSON.stringify(menu),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const result= await response.json();
        if(!response){
            console.log(result.error)
            seterror(result.error)
        }
        if(response){
            console.log(result)
            alert("menu added")
            setname('')
            setingredients('')
            settaste('')
            setprice('') 
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

export default Addmenu
