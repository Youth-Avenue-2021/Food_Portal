import "./App.css";
import MessRanking from "./Components/MessRanking";
import Navbar from "./Components/Navbar";
import PyBoat from "./Components/PyBoat";
import SearchSection from "./Components/SearchSection";

function App() {
  return (
    <>
      <PyBoat />
      <Navbar />
      <SearchSection />
      <MessRanking />
    </>
  );
}

export default App;
