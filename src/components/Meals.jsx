import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router'
import { receipes } from "../data/receipesdata";

export default function Meals() {
    let params = useParams()
    let meal =params.meal
    let receipeByMealtype =receipes.filter((e)=> e.mealType.includes(meal)    )      
   let t = receipeByMealtype.map((r)=>
        {
            return <div className='flex flex-col  text-center'>
                <img src={r.image} alt="" className='w-60 aspect-square' />
                <br />
                <div className='text-orange-500'>{r.name}</div>
                <div>Difficulty Level : {r.difficulty}</div>
                <div>Type: {r.mealType}</div>
                <Link to={'/FullReceipe/'+r.id}>Full Receipe</Link>
            </div>
        })
  return (
    <div>{meal} Receipes
    <div className='flex gap-5 flex-wrap justify-center'>
        {t}
        </div></div>
  )
}
