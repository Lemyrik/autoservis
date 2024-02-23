import Main from "../components/Main/Main";
import CardPage from "../pages/CardPage/CardPage";
import MainPage from "../pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<MainPage />} />
        <Route path=":id" element={<CardPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesPage;
