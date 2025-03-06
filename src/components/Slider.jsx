import { useEffect, useState } from "react"

const data = [
       "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
       "https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_1280.jpg"
]  
const Slider = ()=>{
const [count , setcount] = useState(0);
if(count<0){
    setcount(4)
}
else if (count>=5){
    setcount(0)
}
const change = ()=>{
    setcount(count+1)
    
}
const previous = ()=>{
    setcount(count-1)
    
}


useEffect(()=>{
    const  clearTime = setTimeout(() => {
        change();
    }, 2000);
    return ()=> clearTimeout(clearTime)
})
    return(<>
<div className="flex items-center justify-center">
<button onClick={previous} className="px-6 py-3 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 text-white
 font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">previous</button>

 <img  src={ data[count] } className="w-1/2 h-64 hover:w-36 hover:h-24  border-r-4 to-black border-solid m-2  rounded-2xl"/> 
 
 <button onClick={change} className="px-6 py-3 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 text-white font-semibold 
 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none 
 focus:ring-2 focus:ring-blue-400"> NEXT</button>  
</div>
        </>)
}    
export default  Slider;