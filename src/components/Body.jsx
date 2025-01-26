import React, { Component, useState,useEffect,useRef , ReactDOM} from 'react'
import Search from './Search';
import { Link, Router, Routes , Route ,Outlet,RouterProvider , createBrowserRouter, redirect, useNavigate} from 'react-router-dom';
// import Card from './navbar/Card';
import Contact from './navbar/Contact';
import Cardadd from './navbar/Card-add';
import contact from './navbar/Contact';
import About from './navbar/About';
import AddItemCard from './navbar/Card-add';
import Header from './Header';
import Footer from '../Footer';
import Error from '../Error'
import Rastomenu from '../RastoMenu';
import CDN_IMG from '../constant';
import Slider from './Slider';
import useOnline from './useOnline';
import OfflinPage from '../offline/OfflinePage';


const burgerKing = 
  [
    {
        "food_id": 1001,
        "food_image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hjao7sorzggaeqito6au",
        "restaurant_name": "Pasta Paradise"
    },
    {
        "food_id": 1002,
        "food_image": "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        "restaurant_name": "Sushi Spot"
    },
    { 
        "food_id": 1003,
        "food_image": "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
        "restaurant_name": "Burger Haven",
        "name":"pizzza"
    },
    {
        "food_id": 1004,
        "food_image": "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        "restaurant_name": "Taco Town"
    },
    {
        "food_id": 1005,
        "food_image": "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
        "restaurant_name": "Salad Station"
    },
    {
        "food_id": 1006,
        "food_image": "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        "restaurant_name": "Pizza Palace"
    },
    {
        "food_id": 1007,
        "food_image": "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
        "restaurant_name": "Dessert Den"
    },
    {
        "food_id": 1008,
        "food_image": "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
        "restaurant_name": "Curry Corner"
    },
    {
        "food_id": 1009,
        "food_image": "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        "restaurant_name": "BBQ Bistro"
    },
    {
        "food_id": 1010,
        "food_image": "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
        "restaurant_name": "Diner Delight"
    },
    {
      "food_id": 1011,
      "food_image": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
      "restaurant_name": "Diner Delight"
  },
  {
    "food_id": 1012,
    "food_image": "https://images.pexels.com/photos/19345991/pexels-photo-19345991/free-photo-of-delicious-beef-burger.jpeg?auto=compress&cs=tinysrgb&w=600",
    "restaurant_name": "Diner Delight"
},

  {
    "food_id": 1013,
    "food_image": "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600",
    "restaurant_name": "The Gourmet Bistro"
  },
  {
    "food_id": 1014,
    "food_image": "https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    "restaurant_name": "Pasta Paradise"
  },
  {
    "food_id": 1015,
    "food_image": "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "restaurant_name": "Sushi Master"
  },
  {
    "food_id": 1016,
    "food_image": "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
    "restaurant_name": "Spicy Delights"
  },
  {
    
    "food_image": "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
    "restaurant_name": "Burgers & Fries",
    "food_id": 1017
  }


]
const Card = () => {  
  
  useEffect(()=>{
    setdata(burgerKing);
  },[])
  
const navigate = useNavigate()
   const menuPage = ()=>{
navigate("/menu")
    // window.location.href = "/menu";
  }
  
 
  const [data,setdata] = useState(burgerKing);
  const [search,setsearch] = useState("")
  const [newfilterdata,setnewfilterdata] = useState(data)
  const inputRef = useRef(null); 

  const searchData = (e)=>{
    setsearch(e.target.value);
   
  }
  const filterData =  data.filter((curval)=>{
    return curval.restaurant_name.toLowerCase().includes(search.toLocaleLowerCase())
  })
useEffect(()=>{
  setnewfilterdata(filterData);
},[search,data])

 
const Search = ()=>{
  return(<>
  
  </>)
}

const online = useOnline()

if(!online){
return (<>
<OfflinPage />
</>)
}



  return(

    <div className='h-full mr-36 ml-36 '>
    
  <Slider />  
<div>
<input 
  type="text" 
  
  placeholder="Search here" 
  value={search} // Ensure the value is tied to the state
  onChange={searchData} // Update state when user types
  className="text-black px-4 py-2 border h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 m-2 border-black"
/>
   <button className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300">search</button>
</div>
{/* food items */}
<div className='h-full flex flex-wrap overflow-hidden min-h-fit gap-10  ' onClick={menuPage}>

{newfilterdata.map((item,i)=>{
  return (
 <div key = {i}> 
  <div className='border-2 rounded-lg transform transition-transform duration-300 hover:scale-110 h-64 shadow-lg ' >

  <img src={item.food_image} className='w-52 border-r-2 rounded-full h-52'/>
  <h1>{item.restaurant_name}</h1>
  <h1>{item.food_id}</h1>
  </div>
  </div>
  )
})}
                                                                                     
</div>

    </div>
  )
}

const AppLaout = ()=>{
  return(<>
  <div className='min-h-[400vh]'>
  <div><Header /></div> 
 
 <div > <Outlet /></div>
 
  <div className='mt-48 bottom-0 left-0'>  <Footer /></div>

  </div>
  </>)
}
  const Routerr = createBrowserRouter([
  {
   path: '/',
    element: <AppLaout/>,
    errorElement: <Error />,
  children : [
  
     {path : '/',
      element: <Card />,
      
    },
    
    {path: '/about',
      element: <About />,
    },
    {path : '/addItem',
      element: <AddItemCard />,
    },
    {path : '/contact',
      element: <Contact />,
    },
   {
    path: '/menu',
    element: <Rastomenu  />
   }
  ],
  }
  ]

) 
  
function Body(){
  return(
    <> 
  <RouterProvider router={Routerr} />
    
    </>
  );
 }
 
  export default Body;