import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SignIn } from './components/Pages/SignIn';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Games } from './components/Pages/Games';
import { getUser } from './apis/user';
import { SignUp } from './components/Pages/SignUp';
import { Game } from './components/Pages/Game';

function App() {
  const [display, setDisplay] = useState("none")
  const [token, setToken, removeToken] = useLocalStorage("token", "")
  const [user, setUser] = useState({})
  const [selectedGameId, setSelectedGameId] = useState(null)

  useEffect(() => {
    const handleGetUser = async () => {
      const response = await getUser(token)
      if (response.status === "success") {
        setUser(response.body)
      } else {
        setDisplay("none")
        setUser({})
      }
    }
    handleGetUser()
  }, [token])



  return (
    <div className="App">
      <Header setDisplay={setDisplay} user={user} removeToken={removeToken}></Header>
      <div className='container'>
        {((display === "none" && token) || display === "games") && <Games token={token} setDisplay={setDisplay} setSelectedGameId={setSelectedGameId}></Games>}
        {display === "signin" && <SignIn setToken={setToken} setDisplay={setDisplay}></SignIn>}
        {display === "signup" && <SignUp setToken={setToken} setDisplay={setDisplay}></SignUp>}
        {display === "game" && <Game token={token} setDisplay={setDisplay} selectedGameId={selectedGameId}></Game>}
      </div>
    </div>
  );
}

export default App;
