import CardPage from "../pages/CardPage";
import TablePage from "../pages/TablePage";
import { Routes, Route } from "react-router-dom";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/table" element={<TablePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default RoutesPage;
