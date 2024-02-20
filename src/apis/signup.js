import { path } from "./path"

export const signup = async (username, password) => {
  try {
    const res = await fetch(`${path}/v1/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = res.json()
    return {
      status: "success",
      token: "xxx"
    }
  } catch (e) {
    return false
  }
}
export const singin = async (username, password) => {
  try {
    const res = await fetch(`${path}/v1/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = res.json()
    return {
      status: "success",
      token: "xxx"
    }
  } catch (e) {
    return false
  }
}