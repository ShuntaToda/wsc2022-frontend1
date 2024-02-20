import React from 'react'
import { HeaderButtons } from './HeaderButtons.jsx'
import { SignOut } from './SignOut'

export const Header = ({ setDisplay, user, removeToken }) => {
  return (
    <div className='w-100 px-4 border-bottom d-flex justify-content-between align-items-center' style={{ height: "100px" }}>
      <h1 className='fs-1'>FrontEnd</h1>
      {user.id ?
        (<div>
          <div>{user.name}</div>
          <SignOut removeToken={removeToken}></SignOut>

        </div>)
        : <HeaderButtons setDisplay={setDisplay}></HeaderButtons>
      }
    </div>
  )
}
