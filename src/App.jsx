import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chats";

function App() {
  return (
    <Switch>
      <Route path="/chats" component={Chats}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
}

export default App;
