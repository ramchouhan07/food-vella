import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import CDN_IMG from "./constant";
import Shippingui from "./components/Shippingui"
const Rastomenu = ()=>{
const {id}  = useParams();

console.log(id)

const [menuData, setmenuData] = useState();


useEffect(()=>{
    menuApi();
},[])

async function menuApi() {
  const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151649&submitAction=ENTER"   )
  const json = await data.json();
  // console.log(Object.values(json))
  console.log(json)
setmenuData(json.data);
console.log(menuData?.cards[5]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.imageId);

}

    return(!Rastomenu ?<Shippingui/> :<>

    <div>
        <div>
   <h1>{id}</h1>
    { menuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards.map((item,i)=>{
  const imageUrl = item?.card?.info?.imageId ? CDN_IMG+ item?.card?.info?.imageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNHY7SCyNH3seBH330zb2iIWJFa5-Jsyxlg&s"
return(<>
<div className="flex m-8 border-4 h-52 p-2 bg-gray-200 ">
<div className="relative gap-y-4 ">

    <h1 className="font-extrabold">{item.card?.info.name}</h1>
    <h1 className="font-bold">{item.card?.info.price} ₹</h1>
    <h1 className="text-green-400">⭐{4.5}</h1>
   
    <p className="m-3 ml-0">{item.card?.info.description}</p>
  
    <h1 className="absolute bottom-0 left-0">id:{item.card?.info.id}</h1> 
   <h1>{id}</h1>
</div >
       <div id="i" className="absolute  right-32 w-42 h-42 items-center text-center">
       <img src={imageUrl} alt="img" id={i} className="w-40 h-32 m-0 p-0 rounded"/>
       <button className="  bg-gray-50  px-10 py-3 text-green-500 font-extrabold   rounded-full shadow-lg hover:bg-gray-500 transition duration-300  z-10">add</button>
        </div>
</div>

  </>)
    })}
        </div>
    </div>
   
    
    </>)
}
export default Rastomenu ;