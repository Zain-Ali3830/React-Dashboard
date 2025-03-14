import { useState, useEffect } from "react";
const Fetch=()=>{
const [data,setData]=useState(null)
const [error,setError]=useState(null)
useEffect(()=>{
    const fetchData= async ()=>{
        try{
            const item= await fetch('https://fakestoreapi.com/products?limit=14')
            if(!item.ok){
                throw new Error("Error");
            }
            const response= await item.json()
            setData(response)
        }
        catch(error){
        setError(error)
        }
    }
    fetchData();
},[])

return(
    <div>
        <h1 style={{textAlign:'center'}}>Data From API</h1>
        {error&& <h2>{error.message}</h2>}
       <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
       {data && data.map((item)=>(
             <div style={{height:'300px', width:'1200px', marginLeft:'80px', borderRadius:'10px', display:'flex', justifyContent:'space-evenly', alignItems:'center', gap:'50px', border:'0.5px solid gray', boxShadow:'10px 10px 15px gray', paddingLeft:'35px'}} key={item.id}>
                <div style={{ boxShadow:'5px 5px 195px gray'}}><img style={{height:'100px', width:'100px'}} src={item.image} alt="" /> <br /></div>
                <div><h2>Title:</h2><p>{item.title}</p></div>
                <div><h2>Description:</h2><p>{item.description}</p></div>
           </div>
        ))}
       </div>
    </div>
)   
}

export default Fetch;


