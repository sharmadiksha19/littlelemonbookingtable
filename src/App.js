import React from "react";
import BookingForm from "./Components/BookingForm";
import BookingTable from "./Components/BookingTable";

import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/bookingtable" element={<BookingTable />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <footer>
        <p>&copy; 2023 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
