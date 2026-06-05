import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountdownPage from "./pages/CountdownPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countdown/:id" element={<CountdownPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
