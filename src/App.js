import "./App.css";
import MessRanking from "./Components/MessRanking";
import Navbar from "./Components/Navbar";
import PyBoat from "./Components/PyBoat";
import SearchSection from "./Components/SearchSection";
import { Routes, Route } from "react-router-dom";
import Mess from "./Pages/MessData/Mess";
import MessLinksData from "./Pages/MessData/Components/MessLinksData";
import MessComplains from "./Pages/MessData/Components/MessComplains";
import MessReviews from "./Pages/MessData/Components/MessReviews";
import MessRatingSection from "./Pages/MessData/Components/MessRatingSection";

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
        <Route path="mess" element={<Mess />}>
          <Route path="info" element={<MessLinksData />} />
          <Route path="complains" element={<MessComplains />} />
          <Route
            path="review"
            element={
              <>
                <MessReviews />
                <MessRatingSection />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
