import { path } from "./path"

export const getUser = async (token) => {
  try {
    const res = await fetch(`${path}/user`, {
      method: "GET",
      body: JSON.stringify({
        token: token,
      })
    })
    const data = await res.json()
  } catch (e) {
    if (!token) {
      return {
        status: "error",
      }
    }
    return {
      status: "success",
      body: {
        name: "user",
        id: 20
      }
    }
    return false
  }
}