import React, { useEffect, useState } from 'react'
import { getGame } from '../../apis/game'

export const Game = ({ token, selectedGameId, setDisplay }) => {
  const [game, setGame] = useState({})

  useEffect(() => {
    const handleGetGame = async () => {
      const response = await getGame(token, selectedGameId)
      console.log(response)
      setGame(response)
    }
    handleGetGame()
    console.log("aaa")
  }, [])
  return (
    <div className='mt-5'>
      <h2>{game.title}</h2>
      <div style={{ width: "500px", height: "300px" }} className='border' ></div>
      <div className='d-flex mt-5' >
        <div className='w-50'>
          <h5>Top 10 Leaderboard</h5>
          <div></div>
        </div>
        <div>
          <h5>Description</h5>
          <div>{game.description}</div>
        </div>
      </div>
    </div>
  )
}
