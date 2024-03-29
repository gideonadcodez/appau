import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Topnav from "./components/Topnav";
import Homepage from "./pages/Homepage";
function App() {
  const { theme } = useContext(ThemeContext);
  const name = "Gideon";
  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Topnav />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
