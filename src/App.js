import "./App.css";
import MessRanking from "./Components/MessRanking";
import Navbar from "./Components/Navbar";
import PyBoat from "./Components/PyBoat";
import SearchSection from "./Components/SearchSection";
import { Routes, Route } from "react-router-dom";
import Mess from "./Pages/MessData/Mess";
import MessLinksData from "./Pages/MessData/Components/MessLinksData";

function App() {
  return (
    <>
      <PyBoat />
      <Navbar />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <SearchSection />
              <MessRanking title="Top Ranked Mess" />
              <MessRanking title="All Mess" />
            </>
          }
        />
        <Route path="mess" element={<Mess />} />
      </Routes>
    </>
  );
}

export default App;
