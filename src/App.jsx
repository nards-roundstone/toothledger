import React from "react";
import PrivacyPage from "./pages/PrivacyPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ClinicModePage from "./pages/ClinicModePage";
import PatientViewPage from "./pages/PatientView";
import QRPage from "./pages/QRPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/clinic" element={<ClinicModePage />} />
        <Route path="/patient" element={<PatientViewPage />} />
        <Route path="/qr" element={<QRPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
