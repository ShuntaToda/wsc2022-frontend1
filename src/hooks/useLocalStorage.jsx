import React, { useState } from 'react'

export const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key)
    }
    localStorage.setItem(key, initValue)
    return initValue
  })

  const setStorage = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, newValue)
  }
  const removeStorage = () => {
    setValue(null)
    localStorage.removeItem(key)
  }

  return [value, setStorage, removeStorage]
}
