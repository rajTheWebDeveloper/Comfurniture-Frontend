import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../slices/UserSlice'
import { useNavigate } from 'react-router'

const Profile = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()

    let handleClick=()=>
    {
        dispatch(logout());
        navigate('/login')
    }

  return (
    <section className='min-h-screen'>
        <button className='px-4 py-1 bg-pink-600 text-white' onClick={handleClick}>Logout Bro</button>
    </section>
  )
}
export default Profile