import React from 'react'

export const SignOut = ({ removeToken }) => {
  const handleSignOut = () => {
    removeToken()
  }
  return (
    <div onClick={handleSignOut} className='btn btn-link'>Sign Out</div>
  )
}
