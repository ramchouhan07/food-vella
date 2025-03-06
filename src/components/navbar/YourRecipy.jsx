import React from "react";
const YourRecipe = ()=>{
    const handler = (e)=>{
        e.preventDefault();
        alert("your data go for varification");
    }   
    return<>
    <div className="justify-center content-center flex bg-gray-900 ">
        <div className="flex">
            <div className=" w-full ">  
                <img src="src\assests\ownrecipe - Copy.png" className=" h-screen"></img>
            </div>
            <form className="bg-transparent max-w-2xl mx-auto  border-2 border-gray-200 p-2 rounded-lg shadow-md space-y-4">
  {/* Name input */}
  <input 
    type="text" 
    placeholder="Your Name" 
    className="w-full border-4 border-green-500 px-4 py-3 rounded-lg"
  />

  {/* Email input */}
  <input 
    placeholder="Email" 
    className="w-full border-4 border-green-300 px-4 py-3 rounded-lg"
  />

  {/* Recipe Name input */}
  <input 
    placeholder="Recipe name" 
    className="w-full border-4 border-green-300 px-4 py-3 rounded-lg"
  />

  {/* Recipe Type */}
  <div>
    <label className="block text-lg font-semibold text-white">Recipe Type</label>
    <select className="w-full bg-gray-400-400 border-4 border-green-300 px-4 py-3 rounded-lg">
      <option>Veg</option>
      <option>Non-Veg</option>
    </select>
  </div>

  {/* Time Input */}
  <label className="block text-lg font-semibold text-white"> time Required</label>
  <input 
    type="time" 
    placeholder="Time-Required" 
    className="w-full border-4 border-green-300 px-4 py-3 rounded-lg"
  />

  {/* Description */}
  <div>
    <label className="block text-lg font-semibold text-white">Description</label>
    <textarea 
      placeholder="How to cook recipe" 
      className="w-full border-4 border-green-300 px-4 py-3 rounded-lg"
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button 
      onClick={handler} 
      className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </div>
</form>

        </div>
    </div>
    </>
}
export default YourRecipe;