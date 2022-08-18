import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import PhoneDetails from "./pages/Phonedetails/PhoneDetails";
import Phones from "./pages/Phones/Phones";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
