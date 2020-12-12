import React, {useState , useEffect} from 'react'

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent (){

    const [title] = useState("React Hooks Example")
    const [count,setCount] = useState(0)
    const [city, setCity] = useState()

    useEffect(  ()=>{
        fetch(url, {method:'GET'}).then((res)=>res.json())
        .then(data=>{
            setCity(data)
        })
    })

    const renderCity = ()=>{

        if (city == undefined){
            return(
                <div >
                    <h2 style={{color:"grey"}}>Cities Not Found</h2>
                    <img src={`${window.location}/830.gif`}/>
                </div>
            )
        }
       return city.map((city)=>(
           <div key={city.id}>
               <h2>{city.city_name}</h2>
           </div>
       ))
    }

    return(
        <React.Fragment>
            <center>
                <h1>{title}</h1>
                <p>{count}</p>
                <button onClick={()=>{setCount(count+1)}}>Click </button>
                <h1>Getting Cities from API's</h1>
                {renderCity()}
            </center>

        </React.Fragment>
    )
}


export default HooksComponent