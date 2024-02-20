import React from 'react'

export const HeaderButtons = ({ setDisplay }) => {
  const clicksignUp = () => {
    setDisplay("signup")
  }
  const clickSingIn = () => {
    setDisplay("signin")
  }
  return (
    <div>
      <div onClick={clicksignUp} className='btn btn-primary mx-2'>signUp</div>
      <div onClick={clickSingIn} className='btn btn-primary mx-2'>SingIn</div>
    </div>
  )
}
