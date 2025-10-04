import React from 'react'
import { useParams } from 'react-router'
import { receipes } from '../data/receipesdata';
import { FaStar } from 'react-icons/fa';

export default function FullReceipe() {
    let params = useParams();
    let receipeId = params.id;
    let receipe = receipes.find((r) => r.id == receipeId);
    let rating = Math.round(receipe.rating);

    let ratingUI = [];
    for (var i = 2; i <= rating; i++) {
        ratingUI.push(<FaStar key={i}></FaStar>);
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Column: Image & Rating */}
                <div className="space-y-5">
                    <img
                        src={receipe.image}
                        className="w-full rounded-2xl shadow-lg object-cover"
                        alt={receipe.name}
                    />


                  
                </div>

                {/* Right Column: Details */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">{receipe.name}</h2>  <div className="flex items-center gap-1 text-yellow-400 text-xl">
                        {ratingUI}
                        <span className="text-gray-600 ml-2 text-base">
                            {receipe.rating.toFixed(1)}
                        </span>
                    </div>
                      {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {receipe.tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {receipe.description || "A healthy and delicious dish packed with fresh ingredients."}
                    </p>
                      {/* Basic Info Section */}
                    <div className="bg-gray-50 rounded-xl p-4 shadow-sm grid grid-cols-3">
                        <p><span className="font-semibold">Prep Time:</span> {receipe.prepTimeMinutes} mins</p>
                        <p><span className="font-semibold">Cook Time:</span> {receipe.cookTimeMinutes} mins</p>
                        <p><span className="font-semibold">Servings:</span> {receipe.servings}</p>
                        <p><span className="font-semibold">Difficulty:</span> {receipe.difficulty}</p>
                        <p><span className="font-semibold">Cuisine:</span> {receipe.cuisine}</p>
                        <p><span className="font-semibold">Calories/Serving:</span> {receipe.caloriesPerServing} kcal</p>
                    </div>

                  

                    {/* Ingredients */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">🧂 Ingredients</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {receipe.ingredients.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">👩‍🍳 Instructions</h3>
                        <ol className="list-decimal list-inside text-gray-700 space-y-1">
                            {receipe.instructions.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </div>

                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300">
                        Cook This Recipe 🍳
                    </button>
                </div>
            </div>
        </div>
    );
}
