import React, { useRef } from 'react'
import { singin } from '../../apis/signup'

export const SignIn = ({ setDisplay, setToken }) => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async () => {
    const response = await singin()
    if (response.status === "success") {
      setToken(response.token)
      setDisplay("games")
    }
  }
  return (
    <div>
      <div className='d-flex justify-content-center flex-column align-items-center pt-5'>
        <div className='' style={{ width: "500px" }}>
          <h2>Sign In</h2>
          <div className='input-group mb-3'>
            <label className='input-group-text'>@</label>
            <input ref={usernameRef} className='form-control' placeholder='Username'></input>
          </div>
          <div className='input-group mb-3'>
            <label className='input-group-text'>#123</label>
            <input ref={passwordRef} className='form-control' type='password' placeholder='Password'></input>
          </div>
          <div className='d-flex justify-content-between'>
            <div onClick={handleSubmit} className='btn btn-primary'>SignIn</div>
            <div className='btn btn-link' onClick={() => setDisplay("none")}>cancel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
