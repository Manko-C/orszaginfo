import "../components/Orszagsigma.css"
import { useEffect, useState } from "react"
export default function Orszagsigma(){
    const [orszag,setOrszag] = useState([])
    const [betolt, setBetolt] = useState(true)
    const [kereso, setKereso] = useState("")
    useEffect (() =>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setOrszag(data), setBetolt(false))
        .catch((err) => console.error("Fetch hiba:", err), setBetolt(false))
    } )
    const orszagfilter = orszag.filter((hely) =>{
        return hely.name.official.toLowerCase().includes(kereso.toLowerCase()) || hely.name.common.toLowerCase().includes(kereso.toLowerCase()) || hely.region.toLowerCase().includes(kereso.toLowerCase()) ;
    }, [])
    return(
        <>
        <h1>Ország Információ</h1>
        <input type="text" placeholder="keresés" id="kereso" value={kereso} onChange={(e) => setKereso(e.target.value)}></input>
        <div id="fodiv">
            {betolt ? ( <p>Betöltés folyamatban <img id="tolt" src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"></img></p>) :
            (orszagfilter.map((orszagok, index) =>(
                <div className="orszag_div" key={index}><img src={orszagok.flags.png}></img>{orszagok.name.official}<br/> {orszagok.capital}<br/> {orszagok.region} </div>
            )))}
        </div>
        </>
    )
}