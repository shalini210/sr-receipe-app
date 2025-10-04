import React,{useEffect, useState} from 'react'
import { receipes } from '../data/receipesdata'
import { Link } from 'react-router';

export default function Cuisines() {
  let distintCusines=[]
  const [cuisineUI,setcuisineUI] =useState();
 useEffect(()=>
{
   receipes.map((r)=>
    {
      // r.cuisine
      if((distintCusines.findIndex((c)=>c.cuisine == r.cuisine)) ==-1)
      {
          distintCusines.push({cuisine:r.cuisine,cimg:r.image})
      }    
    })
let i = distintCusines.map((dc)=>
  <div className='bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110  border border-amber-200 flex flex-col items-center p-6 w-62 cursor-pointer hover:bg-amber-50'>
    <img 
      src={dc.cimg}  
      className='w-44 h-44 object-cover rounded-full border-4 border-orange-400 shadow-lg mb-4 transition-all duration-500 hover:scale-110 hover:rotate-3'
      alt={dc.cuisine}
    /> 
    <h2 className='text-2xl font-bold text-gray-800 mb-3 tracking-wide'>{dc.cuisine}</h2>
    <Link 
      to={"/Receipes/"+dc.cuisine} 
      className='bg-gradient-to-r from-orange-400 to-amber-500 text-white px-5 py-2 rounded-lg shadow-md hover:from-orange-500 hover:to-amber-600 transition-all duration-500 transform hover:scale-105'
    >
      View Recipes
    </Link> 
  </div>
)
setcuisineUI(i)
},[])
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-10 tracking-wide">
        Explore World Cuisines 
      </h1>
      <div className='flex flex-wrap gap-10 justify-center'>
        {cuisineUI}
      </div>
    </div>
  )
}
