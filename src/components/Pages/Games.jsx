import React, { useEffect, useState } from 'react'
import { getGames } from '../../apis/game'

export const Games = ({ token, setDisplay, setSelectedGameId }) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const handleGetGames = async () => {
      const response = await getGames(token)
      if (response.content) {
        setGames(response.content)
      }
    }
    handleGetGames()
  })

  const handleSelectGame = (id) => {
    setSelectedGameId(id)
    setDisplay("game")
  }
  return (
    <div className='mt-5'>
      <h2>Games</h2>
      <div>
        <select name="" id="">
          <option value="popularity">popularity</option>
          <option value="recently">recently</option>
          <option value="title">title</option>
        </select>
        <div>
          <label htmlFor="">ASC</label>
          <input type="radio" name="ascending" checked id="" />
          <label htmlFor="">DESC</label>
          <input type="radio" name="ascending" id="" />
        </div>
      </div>
      <div className='d-flex justify-content-between flex-wrap'>
        {games.map(game => (
          <div className='card m-3' style={{ width: "calc(50% - 40px)" }}>
            <img src={game.thumbnail} alt={game.title} className='card-img-top' />
            <div className='card-body'>
              <h5 className="card-title">{game.title}</h5>
              <p className="card-text">{game.description}</p>
              <div onClick={() => handleSelectGame(game.id)} href="#" className="btn btn-primary">play</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
