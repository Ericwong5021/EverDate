import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import CreateAnniversary from "./pages/CreateAnniversary";
import CountdownPage from "./pages/CountdownPage";
import EmailPreview from "./pages/EmailPreview";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateAnniversary />} />
          <Route path="/countdown/:id" element={<CountdownPage />} />
          <Route path="/email/:id" element={<EmailPreview />} />
          <Route path="/payment/:id" element={<PaymentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
