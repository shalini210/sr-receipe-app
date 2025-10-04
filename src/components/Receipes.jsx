import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router'
import { receipes } from "../data/receipesdata";

export default function Receipes() {
    let params = useParams()
    // console.log(JSON.stringify(params))
  let  cuisine =params.cuisine
// console.log("hi")
//     console.log(cuisine)

    const [receipesUI,setreceipesUI] = useState();
    useEffect(()=>
    {
        let receipeByCusine = receipes
        if(cuisine!=undefined)
        {
        receipeByCusine =receipes.filter((e)=>e.cuisine==cuisine)
        }
        let t = receipeByCusine.map((r)=>
        {
            return <div className='flex flex-col  text-center'>
                <img src={r.image} alt="" className='w-60 aspect-square' />
                <br />
                <div className='text-orange-500'>{r.name}</div>
                <div>Difficulty Level : {r.difficulty}</div>
                <div>Type: {r.mealType}</div>
                <Link to={'/FullReceipe/'+r.id}    className='bg-gradient-to-r from-orange-400 to-amber-500 text-white px-5 py-2 rounded-lg shadow-md hover:from-orange-500 hover:to-amber-600 transition-all duration-500 transform hover:scale-105'
   >Full Receipe</Link>
            </div>
        })
        setreceipesUI(t)

    },[cuisine])
    // cuisine
  return (
    <div>{cuisine} Receipes
    <div className='flex gap-5 flex-wrap justify-center'>
        {receipesUI}
        </div> </div>
  )
}
