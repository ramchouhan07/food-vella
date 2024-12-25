import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom ";

const Rastomenu = ()=>{
const params  = useParams();
console.log(params);
console.log("hey ramam  ")


useEffect(()=>{
    async function menuApi() {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=195429&submitAction=ENTER")
        const json = await data.json();
        console.log(json)
    
    }
},[])




    return(<>
    <h>arjdnkevnnn=------------nnnnnnnaekgvn</h>
    
    </>)
}
export default Rastomenu ;