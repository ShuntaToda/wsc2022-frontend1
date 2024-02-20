import { path } from "./path"

export const getGames = async (token) => {
  try {
    const res = await fetch(`${path}/games`, {
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
      page: 0,
      size: 10,
      totalElements: 15,
      content: [
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
        {
          slug: "demo-game-1",
          title: "Demo Game 1",
          description: "This is demo game 1",
          thumbnail: "https://placehold.jp/200x150.png",
          uploadTimestamp: "2032-01-31T21:59:35.000Z",
          author: "dev1",
          scoreCount: 5,
          id: 0
        },
      ]
    }
  }
  return false
}

export const getGame = async (token, id) => {
  try {
    const res = await fetch(`${path}/games`, {
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
      slug: "demo-game-1",
      title: "Demo Game 1",
      description: "This is demo game 1",
      thumbnail: "https://placehold.jp/200x150.png",
      uploadTimestamp: "2032-01-31T21:59:35.000Z",
      author: "dev1",
      scoreCount: 5,
      id: 0
    }
  }
  return false
}