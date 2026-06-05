import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountdownPage from "./pages/CountdownPage";
import EmailPage from "./pages/EmailPage";
import BlessingPage from "./pages/BlessingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countdown/:id" element={<CountdownPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/blessing" element={<BlessingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
