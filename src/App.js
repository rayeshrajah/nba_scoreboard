import './App.css';
import { useDispatch } from "react-redux";
import { getPlayers } from "./actions/playerActions"; 
import PlayerList from "./components/Players/PlayerList"


function App() {
  const dispatch = useDispatch();
  dispatch(getPlayers(0, 25));
  
  return (
    <PlayerList />
  );
}

export default App;
