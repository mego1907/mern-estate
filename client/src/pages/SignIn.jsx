import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  // Handle Submit
  const handleSubmit = (e) => {}

  // Handle Change
  const handleChange = (e) => {}

  return (
        <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="email" 
          className="border p-3 rounded-lg" 
          id="email" 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="password" 
          className="border p-3 rounded-lg" 
          id="password" 
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" disabled={loading}>
          {loading ? "Loading..." : "Sign up"} 
        </button>
      </form>



      <div className="flex gap-2 mt-5">
        <p>Are have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 ">Sign up</span>
        </Link>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
}

export default SignIn