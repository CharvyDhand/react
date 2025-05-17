import React from 'react'
function card(){
    return (
     <div className="max-w-sm rounded-xl shadow-lg bg-white p-6 mt-4">
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="Card"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
      <p className="text-gray-600 mt-2">
        This is a sample card component using Tailwind CSS in React.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
        Learn More
      </button>
    </div>
    );
}