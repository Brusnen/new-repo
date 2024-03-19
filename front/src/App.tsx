import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css"
import "./pages/pages.css"


import ProductionPage from "./pages/ProductionPage";
import MainPage from "./pages/MainPage";
import SmmPage from "./pages/SmmPage";
import PromotionPage from "./pages/PromotionPage";
import WebDesignPage from "./pages/WebDesignPage";
import BrandingPage from "./pages/BrandingPage";
import CreativePage from "./pages/CreativePage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/smm" element={<SmmPage />} />
        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/webdesign" element={<WebDesignPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/creative" element={<CreativePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
