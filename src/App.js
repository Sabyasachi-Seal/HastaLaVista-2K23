import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import TeamPage from "./components/Pages/TeamPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import TeamDetails from "./components/Pages/TeamDetails";
import Layout from "./components/Layout";
import Statistics from "./components/Pages/Statistics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="students" element={<TeamPage />} />
          <Route path="teachers" element={<TeamDetails />} />
          <Route path="statistics" element={<Statistics/>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
