import React from 'react'
import "./compo.css"

function HoverCard() {
  return (
    <>
    <div className="flex-col items-center justify-center">
  <div className="w-32 mx-auto cursor-pointer button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Hover me
  </div>
  <div className="object p-4 mt-4 shadow-xl">
    <div className="max-w-sm rounded">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default HoverCard