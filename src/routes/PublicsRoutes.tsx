import { Route, Routes } from "react-router";
import HomePage from "../features/home/pages/HomePage";

const PublicsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default PublicsRoutes;
