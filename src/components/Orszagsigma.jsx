import "../components/Orszagsigma.css"
import { useEffect, useState } from "react"
export default function Orszagsigma(){
    const [orszag,setOrszag] = useState(null)
    useEffect (() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setOrszag(data))
        .catch((err) => console.error("Fetch hiba:", err))
    } ,[])
    return(
        <>
        <h1>Ország Információ</h1>
        <input type="text" placeholder="keresés" id="kereso"></input>
        <div id="fodiv">
            {orszag  && orszag.map((orszagok, index) =>(
                <div className="orszag_div" key={index}>{orszagok.name.official} {orszagok.capital} {orszagok.region} <img src={orszagok.flags.png}></img></div>
            ))}
        </div>
        </>
    )
}